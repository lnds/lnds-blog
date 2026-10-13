---
title: "Programming is a visual art"
authors: [admin]
date: 2017-07-02T08:25:11-03:00
slug: "programming-is-a-visual-art"
draft: false
tags: ['programming', 'visualizations', 'code']
image:
  placement: 3
---


The video below, along with the beautiful fractal image that
accompanies this post, are visualizations of the source code of a system
my team has been working on since 2015. It's the sum of
six repositories, corresponding to six microservices, that
interact with each other to make up a larger system.

{{<vimeo 223893340>}}
Visualization of code produced by my team

I got the visualizations using the
[Gource](http://gource.io/) utility, from the Git repository we use at the company. 

You can see a more detailed visualization, with the users' names,
here: <https://vimeo.com/223929447>.

If you want to do the same with code written by you or your team,
you can download and install this utility. Using it is pretty
simple. I invite you to try it, and even to share your visualizations
in the comments. 

In my case I ran the following sequence of commands on my Mac to
combine the 6 repositories:

    $ git clone ... repo1
    ....
    $ git clone ... repo6

    $ gource --output-custom-log log1.txt repo1
    $ gource --output-custom-log log2.txt repo2
    ...
    $ gource  --hide filenames,dirnames,progress,users combined.txt --seconds-per-day 0.1
     --auto-skip-seconds 1 -1280x720 -o - | ffmpeg -y -r 60 -f image2pipe 
    -vcodec ppm -i - -vcodec libx264 -preset ultrafast -pix_fmt yuv420p -crf 1 
    -threads 0 -bf 0 gource.mp4

Note that it also uses the **ffmpeg** utility.

To add the music (The Holy Drinker, by Steven Wilson), I used iMovie.

The gource --output-custom-log option generates a file with four
fields per record or line, in the following form:

    1431611496|jorellana|A|/application.properties

The first field is the date in Unix format, the second field is the
user's name, then comes a letter indicating the action: A, M or
D, for Add, Modify or Delete. The fourth field is the
file (the full path).

There's an optional fifth field, which is the color expressed in
hexadecimal RGB format. Gource doesn't generate this field, so it assigns the
color automatically while generating the video.

To create a visualization in which the colors of the files reflect
their creator, I added the color code. For that I used this little
perl script:

```perl
    use Digest::MD5 qw(md5 md5_hex md5_base64);
    while (<>) {
            chomp();
            my ($a,$b,$c,$d) = split(/\|/, $_);
            $e = substr(md5_hex($b), 0, 6);;
            print("$a|$b|$c|$d|$e\n");
    }
```


As you can see, I added a color code based on the MD5 hash of the
user's name (taking the first 6 characters), which leaves the file
looking like this:

    1431611496|jorellana|A|/application.properties|e1bb5f

You can see the result here:
[https://vimeo.com/223929447](https://vimeo.com/223929447)

As you can see, the visualization can be customized to get some
interesting effects.

## And what is all this good for?

Showing this video to the team can be a very motivating experience.

But beyond that, exploring the code with this tool
gives you some information about the structure of the code and the
process of building it. For example, you can see what each team member
contributes, get an idea of how the code is
organized, how much mess there is in the structure, and so on.

The video above leaves out several details, since the goal there is more
of an artistic one.  

Below is another, more typical visualization, in this case of the
code for 9 challenges in 9 languages (<https://github.com/lnds/9d9l>). Here
I left every available visualization parameter visible
(except the date):

{{<vimeo 223922723>}}

Visualization of https://github.com/lnds/9d9l

You'll notice information that's more useful to a software architect or
developer. This video gives you a feel for how the code is
organized, who contributes what to the project,
and so on.

Gource has an interactive mode, where you can move forward or backward and
hover the mouse over each dot or branch to see what
it is. This lets you discuss or reason about the physical structure
the code in your project is taking on. The limits of this
tool are set by its ability to open up conversations among the
members of the group.

There are other ways to visualize code and to get metrics and indicators
of quality and complexity. For example, with tools like
[SonarQube](https://www.sonarqube.org/) or
[Codacy](https://www.codacy.com/), but we'll talk about those tools
in an upcoming article.

For now I'll leave you with these videos, and I invite you to share your
visualizations in the comments.
