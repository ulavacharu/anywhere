import React from 'react'
import MarkdownPreviewer from '../components/markdownPreviewer';

function Langs() {
    const langsSupported=`## Languages Supported  
* oneC (1c)
* abnf
* accesslog
* actionscript
* ada
* angelscript
* apache
* applescript
* arcade
* arduino
* armasm
* asciidoc
* aspectj
* autohotkey
* autoit
* avrasm
* awk
* axapta
* bash
* basic
* bnf
* brainfuck
* cLike (c-like)
* c
* cal
* capnproto
* ceylon
* clean
* clojureRepl (clojure-repl)
* clojure
* cmake
* coffeescript
* coq
* cos
* cpp
* crmsh
* crystal
* csharp
* csp
* css
* d
* dart
* delphi
* diff
* django
* dns
* dockerfile
* dos
* dsconfig
* dts
* dust
* ebnf
* elixir
* elm
* erb
* erlangRepl (erlang-repl)
* erlang
* excel
* fix
* flix
* fortran
* fsharp
* gams
* gauss
* gcode
* gherkin
* glsl
* gml
* go
* golo
* gradle
* groovy
* haml
* handlebars
* haskell
* haxe
* hsp
* htmlbars
* http
* hy
* inform7
* ini
* irpf90
* isbl
* java
* javascript
* jbossCli (jboss-cli)
* json
* juliaRepl (julia-repl)
* julia
* kotlin
* lasso
* latex
* ldif
* leaf
* less
* lisp
* livecodeserver
* livescript
* llvm
* lsl
* lua
* makefile
* markdown
* mathematica
* matlab
* maxima
* mel
* mercury
* mipsasm
* mizar
* mojolicious
* monkey
* moonscript
* n1ql
* nginx
* nim
* nix
* nodeRepl (node-repl)
* nsis
* objectivec
* ocaml
* openscad
* oxygene
* parser3
* perl
* pf
* pgsql
* phpTemplate (php-template)
* php
* plaintext
* pony
* powershell
* processing
* profile
* prolog
* properties
* protobuf
* puppet
* purebasic
* pythonRepl (python-repl)
* python
* q
* qml
* r
* reasonml
* rib
* roboconf
* routeros
* rsl
* ruby
* ruleslanguage
* rust
* sas
* scala
* scheme
* scilab
* scss
* shell
* smali
* smalltalk
* sml
* sqf
* sql
* sqlMore (sql_more)
* stan
* stata
* step21
* stylus
* subunit
* swift
* taggerscript
* tap
* tcl
* thrift
* tp
* twig
* typescript
* vala
* vbnet
* vbscriptHtml (vbscript-html)
* vbscript
* verilog
* vhdl
* vim
* x86asm
* xl
* xml
* xquery
* yaml
* zephir`
  return (
    <center><MarkdownPreviewer input={langsSupported}/></center>
  )
}

export default Langs