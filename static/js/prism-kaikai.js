/* Prism grammar for kaikai — ported from the official kaikai-vscode tmLanguage
 * (https://github.com/kaikailang-org/kaikai-vscode).
 * Registers both "kaikai" and the "kai" alias. */
(function (Prism) {
  if (!Prism) return;

  var keywordsControl = /\b(?:if|else|match|for|with|handle|where|requires|ensures)\b/;
  var keywordsStorage = /\b(?:fn|let|var|const|type|effect|protocol|impl|import|use|test|axiom|unit)\b/;
  var keywordsModifier = /\b(?:pub|as|assert)\b/;
  var keywordsLogical = /\b(?:and|or|not)\b/;

  var builtinTypes = /\b(?:Int|Real|Bool|String|Char|Unit|Nothing|Option|Result|List|Pair|Map|Set|Stack|Queue|Array|Decimal|Money|Fiber|Pid|Regex|Match|Capture|WallTime|Instant|Duration)\b/;
  var builtinEffects = /\b(?:Console|Stdin|Stdout|Stderr|File|Env|State|Reader|Writer|Actor|Spawn|Cancel|Mutable|Fail|Random|Time|Clock|Ffi)\b/;

  var stringInterp = {
    pattern: /#\{[^}]*\}/,
    inside: {
      'interpolation-punctuation': {
        pattern: /^#\{|\}$/,
        alias: 'punctuation'
      },
      rest: null // filled in below
    }
  };

  var grammar = {
    'comment': {
      pattern: /#(?!derive\b).*/,
      greedy: true,
      inside: {
        'codetag': {
          pattern: /\b(?:TODO|FIXME|XXX|NOTE|HACK)\b/,
          alias: 'important'
        }
      }
    },
    'attribute': {
      pattern: /#derive\b/,
      alias: 'annotation'
    },
    'triple-string': {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        'interpolation': stringInterp,
        'escape': /\\(?:[\\"'nrt0]|u\{[0-9a-fA-F]+\})/
      }
    },
    'string': {
      pattern: /"(?:[^"\\]|\\(?:[\\"'nrt0]|u\{[0-9a-fA-F]+\}))*"/,
      greedy: true,
      inside: {
        'interpolation': stringInterp,
        'escape': /\\(?:[\\"'nrt0]|u\{[0-9a-fA-F]+\})/
      }
    },
    'char': {
      pattern: /'(?:\\(?:u\{[0-9a-fA-F]+\}|.)|[^\\'])'/,
      greedy: true,
      alias: 'string'
    },
    'todo-bang': {
      pattern: /\btodo!/,
      alias: 'deprecated'
    },
    'function-definition': {
      pattern: /\b(fn)\s+([a-z_][A-Za-z0-9_]*)/,
      inside: {
        'keyword': /\bfn\b/,
        'function': /[a-z_][A-Za-z0-9_]*/
      }
    },
    'type-definition': {
      pattern: /\b(?:type|effect|protocol|impl)\s+[A-Z][A-Za-z0-9_]*/,
      inside: {
        'keyword': /\b(?:type|effect|protocol|impl)\b/,
        'class-name': /[A-Z][A-Za-z0-9_]*/
      }
    },
    'builtin-type': {
      pattern: builtinTypes,
      alias: 'class-name'
    },
    'builtin-effect': {
      pattern: builtinEffects,
      alias: 'symbol'
    },
    'boolean': /\b(?:true|false)\b/,
    'keyword-control': {
      pattern: keywordsControl,
      alias: 'keyword'
    },
    'keyword-storage': {
      pattern: keywordsStorage,
      alias: 'keyword'
    },
    'keyword-modifier': {
      pattern: keywordsModifier,
      alias: 'keyword'
    },
    'keyword-logical': {
      pattern: keywordsLogical,
      alias: 'keyword'
    },
    'constructor': {
      pattern: /\b[A-Z][A-Za-z0-9_]*\b/,
      alias: 'class-name'
    },
    'hole': {
      pattern: /\?[a-zA-Z_][a-zA-Z0-9_]*|\?(?![=])/,
      alias: 'variable'
    },
    'number': /\b\d[0-9_]*(?:\.\d[0-9_]*)?(?:[eE][+-]?\d+)?\b/,
    'operator': /\|>|->|=>|==|!=|<=|>=|:=|\+\+|\.\.\.|\.\.|::|[<>+\-*/%^!@:|=]/,
    'punctuation': /[{}()\[\],;]/
  };

  // Self-reference for interpolation now that grammar exists.
  stringInterp.inside.rest = grammar;

  Prism.languages.kaikai = grammar;
  Prism.languages.kai = grammar;
}(typeof window !== 'undefined' ? window.Prism : (typeof self !== 'undefined' ? self.Prism : null)));
