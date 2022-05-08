import{_ as t,r,o as c,c as p,e as n,w as l,F as i,d as o,a,b as e}from"./app.7e6eba9e.js";const d={},m=o('<h1 id="\u914D\u7F6E\u6A21\u5F0F-schema" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6A21\u5F0F-schema" aria-hidden="true">#</a> \u914D\u7F6E\u6A21\u5F0F (Schema)</h1><h2 id="\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u65B9\u6CD5</h2><h3 id="schema-any" tabindex="-1"><a class="header-anchor" href="#schema-any" aria-hidden="true">#</a> Schema.any()</h3><p>\u58F0\u660E\u4E00\u4E2A\u4EFB\u610F\u7C7B\u578B\u7684\u503C\u3002</p>',4),F=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<any, any>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.any(): Schema<any, any>"},"any")]),a("span",{style:{color:"#F8F8F2"}},"()")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => any (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                "),a("span",{style:{color:"#88846F"}},"// undefined")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: any) => any (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},")               "),a("span",{style:{color:"#88846F"}},"// 0")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: any) => any (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"({})              "),a("span",{style:{color:"#88846F"}},"// {}")]),e(`
`)])])],-1),h=a("h3",{id:"schema-never",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-never","aria-hidden":"true"},"#"),e(" Schema.never()")],-1),y=a("p",null,[e("\u58F0\u660E\u4E00\u4E2A\u7A7A\u503C ("),a("code",null,"null"),e(" \u6216 "),a("code",null,"undefined"),e(")\u3002")],-1),u=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<never, never>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.never(): Schema<never, never>"},"never")]),a("span",{style:{color:"#F8F8F2"}},"()")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => never (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                "),a("span",{style:{color:"#88846F"}},"// undefined")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: never) => never (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},[a("data-err",null,"0")]),a("span",{style:{color:"#F8F8F2"}},")               "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): never', gave the following error.
    Argument of type '0' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: never): never', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'never'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): never', gave the following error.
    Argument of type '0' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: never): never', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'never'.`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: never) => never (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},[e("("),a("data-err",null,"{}"),e(")              ")]),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): never', gave the following error.
    Argument of type '{}' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: never): never', gave the following error.
    Argument of type '{}' is not assignable to parameter of type 'never'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): never', gave the following error.
    Argument of type '{}' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: never): never', gave the following error.
    Argument of type '{}' is not assignable to parameter of type 'never'.`)])])],-1),b=a("h3",{id:"schema-const-value",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-const-value","aria-hidden":"true"},"#"),e(" Schema.const(value)")],-1),S=a("p",null,"\u58F0\u660E\u4E00\u4E2A\u5E38\u91CF\u503C\u3002",-1),g=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<number, number>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.const<number>(value: number): Schema<number, number>"},"const")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"10"),a("span",{style:{color:"#F8F8F2"}},")")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: number) => number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"10"),a("span",{style:{color:"#F8F8F2"}},")              "),a("span",{style:{color:"#88846F"}},"// 10")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: number) => number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},")               "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`)])])],-1),v=a("h3",{id:"schema-number",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-number","aria-hidden":"true"},"#"),e(" Schema.number()")],-1),E=a("p",null,"\u58F0\u660E\u4E00\u4E2A\u6570\u503C\u7C7B\u578B\u7684\u503C\u3002",-1),f=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<number, number>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.number(): Schema<number, number>"},"number")]),a("span",{style:{color:"#F8F8F2"}},"()")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                "),a("span",{style:{color:"#88846F"}},"// undefined")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: number) => number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"1"),a("span",{style:{color:"#F8F8F2"}},")               "),a("span",{style:{color:"#88846F"}},"// 1")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: number) => number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},[a("data-err",null,"''")]),a("span",{style:{color:"#F8F8F2"}},")              "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): number', gave the following error.
    Argument of type '""' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: number): number', gave the following error.
    Argument of type 'string' is not assignable to parameter of type 'number'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): number', gave the following error.
    Argument of type '""' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: number): number', gave the following error.
    Argument of type 'string' is not assignable to parameter of type 'number'.`)])])],-1),A=a("h3",{id:"schema-string",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-string","aria-hidden":"true"},"#"),e(" Schema.string()")],-1),_=a("p",null,"\u58F0\u660E\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u3002",-1),D=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<string, string>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.string(): Schema<string, string>"},"string")]),a("span",{style:{color:"#F8F8F2"}},"()")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => string (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                "),a("span",{style:{color:"#88846F"}},"// undefined")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: string) => string (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},[a("data-err",null,"0")]),a("span",{style:{color:"#F8F8F2"}},")               "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): string', gave the following error.
    Argument of type '0' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: string): string', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'string'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): string', gave the following error.
    Argument of type '0' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: string): string', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'string'.`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: string) => string (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},"'foo'"),a("span",{style:{color:"#F8F8F2"}},")           "),a("span",{style:{color:"#88846F"}},"// 'foo'")]),e(`
`)])])],-1),T=a("h3",{id:"schema-boolean",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-boolean","aria-hidden":"true"},"#"),e(" Schema.boolean()")],-1),O=a("p",null,"\u58F0\u660E\u4E00\u4E2A\u5E03\u5C14\u7C7B\u578B\u7684\u503C\u3002",-1),w=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<boolean, boolean>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.boolean(): Schema<boolean, boolean>"},"boolean")]),a("span",{style:{color:"#F8F8F2"}},"()")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => boolean (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                "),a("span",{style:{color:"#88846F"}},"// undefined")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: boolean) => boolean (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},[a("data-err",null,"0")]),a("span",{style:{color:"#F8F8F2"}},")               "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): boolean', gave the following error.
    Argument of type '0' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: boolean): boolean', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'boolean'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): boolean', gave the following error.
    Argument of type '0' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: boolean): boolean', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'boolean'.`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: boolean) => boolean (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"true"),a("span",{style:{color:"#F8F8F2"}},")            "),a("span",{style:{color:"#88846F"}},"// true")]),e(`
`)])])],-1),k=a("h3",{id:"schema-is-constructor",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-is-constructor","aria-hidden":"true"},"#"),e(" Schema.is(constructor)")],-1),x=a("p",null,"\u58F0\u660E\u4E00\u4E2A\u7ED9\u5B9A\u7C7B\u7684\u5B9E\u4F8B\u3002",-1),N=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<RegExp, RegExp>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.is<RegExp>(constructor: Constructor<RegExp>): Schema<RegExp, RegExp>"},"is")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#66D9EF"}},[a("data-lsp",{lsp:"var RegExp: RegExpConstructor"},"RegExp")]),a("span",{style:{color:"#F8F8F2"}},")")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => RegExp (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                "),a("span",{style:{color:"#88846F"}},"// undefined")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: RegExp) => RegExp (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},"/foo/"),a("span",{style:{color:"#F8F8F2"}},")           "),a("span",{style:{color:"#88846F"}},"// /foo/")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: RegExp) => RegExp (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},[a("data-err",null,"'foo'")]),a("span",{style:{color:"#F8F8F2"}},")           "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): RegExp', gave the following error.
    Argument of type '"foo"' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: RegExp): RegExp', gave the following error.
    Argument of type 'string' is not assignable to parameter of type 'RegExp'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): RegExp', gave the following error.
    Argument of type '"foo"' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: RegExp): RegExp', gave the following error.
    Argument of type 'string' is not assignable to parameter of type 'RegExp'.`)])])],-1),j=a("h3",{id:"schema-array-inner",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-array-inner","aria-hidden":"true"},"#"),e(" Schema.array(inner)")],-1),C=a("p",null,[e("\u58F0\u660E\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u6240\u6709\u5143\u7D20\u90FD\u5339\u914D "),a("code",null,"inner"),e(" \u7684\u7C7B\u578B\u3002")],-1),B=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<number[], number[]>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.array<Schema<number, number>>(inner: Schema<number, number>): Schema<number[], number[]>"},"array")]),a("span",{style:{color:"#F8F8F2"}},[e("("),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.number(): Schema<number, number>"},"number")]),a("span",{style:{color:"#F8F8F2"}},"())")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => number[] (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                      "),a("span",{style:{color:"#88846F"}},"// []")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: number[]) => number[] (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},[a("data-err",null,"0")]),a("span",{style:{color:"#F8F8F2"}},")                     "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): number[]', gave the following error.
    Argument of type '0' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: number[]): number[]', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'number[]'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): number[]', gave the following error.
    Argument of type '0' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: number[]): number[]', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'number[]'.`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: number[]) => number[] (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"(["),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},", "),a("span",{style:{color:"#AE81FF"}},"1"),a("span",{style:{color:"#F8F8F2"}},"])                "),a("span",{style:{color:"#88846F"}},"// [0, 1]")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: number[]) => number[] (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"(["),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},", "),a("span",{style:{color:"#E6DB74"}},"'1'"),a("span",{style:{color:"#F8F8F2"}},"])              "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): number[]', gave the following error.
    Argument of type '(string | number)[]' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: number[]): number[]', gave the following error.
    Type 'string' is not assignable to type 'number'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): number[]', gave the following error.
    Argument of type '(string | number)[]' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: number[]): number[]', gave the following error.
    Type 'string' is not assignable to type 'number'.`)])])],-1),R=a("h3",{id:"schema-dict-inner",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-dict-inner","aria-hidden":"true"},"#"),e(" Schema.dict(inner)")],-1),L=a("p",null,[e("\u58F0\u660E\u4E00\u4E2A\u5BF9\u8C61 (\u952E\u503C\u5BF9)\uFF0C\u5176\u6240\u6709\u503C\u90FD\u5339\u914D "),a("code",null,"inner"),e(" \u7684\u7C7B\u578B\u3002")],-1),q=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<Dict<number, string>, Dict<number, string>>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.dict<Schema<number, number>, Schema<string, string>>(inner: Schema<number, number>, sKey?: Schema<string, string>): Schema<Dict<number, string>, Dict<...>>"},"dict")]),a("span",{style:{color:"#F8F8F2"}},[e("("),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.number(): Schema<number, number>"},"number")]),a("span",{style:{color:"#F8F8F2"}},"())")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => Dict<number, string> (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                      "),a("span",{style:{color:"#88846F"}},"// {}")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: Dict<number, string>) => Dict<number, string> (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},[a("data-err",null,"0")]),a("span",{style:{color:"#F8F8F2"}},")                     "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): Dict<number, string>', gave the following error.
    Argument of type '0' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: Dict<number, string>): Dict<number, string>', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'Dict<number, string>'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): Dict<number, string>', gave the following error.
    Argument of type '0' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: Dict<number, string>): Dict<number, string>', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'Dict<number, string>'.`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: Dict<number, string>) => Dict<number, string> (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) a: number"},"a"),e(": ")]),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},[e(", "),a("data-lsp",{lsp:"(property) b: number"},"b"),e(": ")]),a("span",{style:{color:"#AE81FF"}},"1"),a("span",{style:{color:"#F8F8F2"}}," })        "),a("span",{style:{color:"#88846F"}},"// { a: 0, b: 1 }")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: Dict<number, string>) => Dict<number, string> (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) a: number"},"a"),e(": ")]),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},[e(", "),a("data-lsp",{lsp:"(property) b: string"},"b"),e(": ")]),a("span",{style:{color:"#E6DB74"}},"'1'"),a("span",{style:{color:"#F8F8F2"}}," })      "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): Dict<number, string>', gave the following error.
    Argument of type '{ a: number; b: string; }' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: Dict<number, string>): Dict<number, string>', gave the following error.
    Type 'string' is not assignable to type 'number'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): Dict<number, string>', gave the following error.
    Argument of type '{ a: number; b: string; }' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: Dict<number, string>): Dict<number, string>', gave the following error.
    Type 'string' is not assignable to type 'number'.`)])])],-1),V=a("h3",{id:"schema-tuple-list",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-tuple-list","aria-hidden":"true"},"#"),e(" Schema.tuple(list)")],-1),K=a("p",null,[e("\u58F0\u660E\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u6BCF\u4E2A\u5143\u7D20\u4F9D\u6B21\u5339\u914D "),a("code",null,"list"),e(" \u4E2D\u5BF9\u5E94\u5143\u7D20\u7684\u7C7B\u578B\u3002")],-1),z=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<any[], any[]>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.tuple<(Schema<number, number> | Schema<string, string>)[]>(list: (Schema<number, number> | Schema<string, string>)[]): Schema<any[], any[]>"},"tuple")]),a("span",{style:{color:"#F8F8F2"}},"([")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[e("  "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.number(): Schema<number, number>"},"number")]),a("span",{style:{color:"#F8F8F2"}},"(),")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[e("  "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.string(): Schema<string, string>"},"string")]),a("span",{style:{color:"#F8F8F2"}},"(),")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},"])")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => any[] (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                      "),a("span",{style:{color:"#88846F"}},"// []")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: any[]) => any[] (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"(["),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},"])                   "),a("span",{style:{color:"#88846F"}},"// { a: 0 }")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: any[]) => any[] (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"(["),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},", "),a("span",{style:{color:"#AE81FF"}},"1"),a("span",{style:{color:"#F8F8F2"}},"])                "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: any[]) => any[] (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"(["),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},", "),a("span",{style:{color:"#E6DB74"}},"'1'"),a("span",{style:{color:"#F8F8F2"}},"])              "),a("span",{style:{color:"#88846F"}},"// [0, '1']")]),e(`
`)])])],-1),G=a("h3",{id:"schema-object-dict",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-object-dict","aria-hidden":"true"},"#"),e(" Schema.object(dict)")],-1),H=a("p",null,[e("\u58F0\u660E\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5176\u6BCF\u4E2A\u5C5E\u6027\u90FD\u5339\u914D "),a("code",null,"dict"),e(" \u4E2D\u5BF9\u5E94\u5C5E\u6027\u7684\u7C7B\u578B\u3002")],-1),I=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:`const validate: Schema<ObjectS<{
    a: Schema<number, number>;
    b: Schema<string, string>;
}>, ObjectT<{
    a: Schema<number, number>;
    b: Schema<string, string>;
}>>`},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`(method) Schema<S = any, T = S>.Static.object<{
    a: Schema<number, number>;
    b: Schema<string, string>;
}>(dict: {
    a: Schema<number, number>;
    b: Schema<string, string>;
}): Schema<ObjectS<{
    a: Schema<number, number>;
    b: Schema<string, string>;
}>, ObjectT<...>>`},"object")]),a("span",{style:{color:"#F8F8F2"}},"({")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[e("  "),a("data-lsp",{lsp:"(property) a: Schema<number, number>"},"a"),e(": "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.number(): Schema<number, number>"},"number")]),a("span",{style:{color:"#F8F8F2"}},"(),")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[e("  "),a("data-lsp",{lsp:"(property) b: Schema<string, string>"},"b"),e(": "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.string(): Schema<string, string>"},"string")]),a("span",{style:{color:"#F8F8F2"}},"(),")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},"})")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => ObjectT<{
    a: Schema<number, number>;
    b: Schema<string, string>;
}> (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                      "),a("span",{style:{color:"#88846F"}},"// {}")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: ObjectS<{
    a: Schema<number, number>;
    b: Schema<string, string>;
}>) => ObjectT<{
    a: Schema<number, number>;
    b: Schema<string, string>;
}> (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) a?: number"},"a"),e(": ")]),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}}," })              "),a("span",{style:{color:"#88846F"}},"// { a: 0 }")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: ObjectS<{
    a: Schema<number, number>;
    b: Schema<string, string>;
}>) => ObjectT<{
    a: Schema<number, number>;
    b: Schema<string, string>;
}> (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) a?: number"},"a"),e(": ")]),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},[e(", "),a("data-lsp",{lsp:"(property) b?: string"},"b"),e(": ")]),a("span",{style:{color:"#AE81FF"}},"1"),a("span",{style:{color:"#F8F8F2"}}," })        "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): ObjectT<{ a: Schema<number, number>; b: Schema<string, string>; }>', gave the following error.
    Argument of type '{ a: number; b: number; }' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: ObjectS<{ a: Schema<number, number>; b: Schema<string, string>; }>): ObjectT<{ a: Schema<number, number>; b: Schema<string, string>; }>', gave the following error.
    Type 'number' is not assignable to type 'string'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): ObjectT<{ a: Schema<number, number>; b: Schema<string, string>; }>', gave the following error.
    Argument of type '{ a: number; b: number; }' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: ObjectS<{ a: Schema<number, number>; b: Schema<string, string>; }>): ObjectT<{ a: Schema<number, number>; b: Schema<string, string>; }>', gave the following error.
    Type 'number' is not assignable to type 'string'.`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: ObjectS<{
    a: Schema<number, number>;
    b: Schema<string, string>;
}>) => ObjectT<{
    a: Schema<number, number>;
    b: Schema<string, string>;
}> (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) a?: number"},"a"),e(": ")]),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},[e(", "),a("data-lsp",{lsp:"(property) b?: string"},"b"),e(": ")]),a("span",{style:{color:"#E6DB74"}},"'1'"),a("span",{style:{color:"#F8F8F2"}}," })      "),a("span",{style:{color:"#88846F"}},"// { a: 0, b: '1' }")]),e(`
`)])])],-1),J=a("h3",{id:"schema-union-list",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-union-list","aria-hidden":"true"},"#"),e(" Schema.union(list)")],-1),M=a("p",null,[e("\u58F0\u660E\u4E00\u4E2A\u503C\uFF0C\u5176\u7C7B\u578B\u53EF\u5339\u914D "),a("code",null,"list"),e(" \u4E2D\u4EFB\u610F\u4E00\u4E2A\u7C7B\u578B\u3002")],-1),P=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<string | number, string | number>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.union<Schema<number, number> | Schema<string, string>>(list: readonly (Schema<number, number> | Schema<string, string>)[]): Schema<string | number, string | number>"},"union")]),a("span",{style:{color:"#F8F8F2"}},"([")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[e("  "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.number(): Schema<number, number>"},"number")]),a("span",{style:{color:"#F8F8F2"}},"(),")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[e("  "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.string(): Schema<string, string>"},"string")]),a("span",{style:{color:"#F8F8F2"}},"(),")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},"])")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => string | number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                      "),a("span",{style:{color:"#88846F"}},"// undefined")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: string | number) => string | number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},")                     "),a("span",{style:{color:"#88846F"}},"// 0")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: string | number) => string | number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},"'1'"),a("span",{style:{color:"#F8F8F2"}},")                   "),a("span",{style:{color:"#88846F"}},"// '1'")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: string | number) => string | number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},[a("data-err",null,"true")]),a("span",{style:{color:"#F8F8F2"}},")                  "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): string | number', gave the following error.
    Argument of type 'true' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: string | number): string | number', gave the following error.
    Argument of type 'boolean' is not assignable to parameter of type 'string | number'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): string | number', gave the following error.
    Argument of type 'true' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: string | number): string | number', gave the following error.
    Argument of type 'boolean' is not assignable to parameter of type 'string | number'.`)])])],-1),Q=a("h3",{id:"schema-intersect-list",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-intersect-list","aria-hidden":"true"},"#"),e(" Schema.intersect(list)")],-1),U=a("p",null,[e("\u58F0\u660E\u4E00\u4E2A\u503C\uFF0C\u5176\u7C7B\u578B\u53EF\u5339\u914D "),a("code",null,"list"),e(" \u4E2D\u6240\u6709\u7C7B\u578B\u3002")],-1),W=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:`const validate: Schema<{
    a?: string;
} & Dict<any, string> & {
    b?: number;
}, {
    a: string;
} & Dict<any, string> & {
    b: number;
}>`},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`(method) Schema<S = any, T = S>.Static.intersect<Schema<ObjectS<{
    a: Schema<string, string>;
}>, ObjectT<{
    a: Schema<string, string>;
}>> | Schema<ObjectS<{
    b: Schema<number, number>;
}>, ObjectT<...>>>(list: readonly (Schema<...> | Schema<...>)[]): Schema<...>`},"intersect")]),a("span",{style:{color:"#F8F8F2"}},"([")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[e("  "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`(method) Schema<S = any, T = S>.Static.object<{
    a: Schema<string, string>;
}>(dict: {
    a: Schema<string, string>;
}): Schema<ObjectS<{
    a: Schema<string, string>;
}>, ObjectT<{
    a: Schema<string, string>;
}>>`},"object")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) a: Schema<string, string>"},"a"),e(": "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.string(): Schema<string, string>"},"string")]),a("span",{style:{color:"#F8F8F2"}},"()."),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<string, string>.required(value?: boolean): Schema<string, string>"},"required")]),a("span",{style:{color:"#F8F8F2"}},"() }),")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[e("  "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`(method) Schema<S = any, T = S>.Static.object<{
    b: Schema<number, number>;
}>(dict: {
    b: Schema<number, number>;
}): Schema<ObjectS<{
    b: Schema<number, number>;
}>, ObjectT<{
    b: Schema<number, number>;
}>>`},"object")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) b: Schema<number, number>"},"b"),e(": "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.number(): Schema<number, number>"},"number")]),a("span",{style:{color:"#F8F8F2"}},"()."),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<number, number>.default(value: number): Schema<number, number>"},"default")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},") }),")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},"])")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => {
    a: string;
} & Dict<any, string> & {
    b: number;
} (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                      "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: {
    a?: string;
} & Dict<any, string> & {
    b?: number;
}) => {
    a: string;
} & Dict<any, string> & {
    b: number;
} (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) a?: string"},"a"),e(": ")]),a("span",{style:{color:"#E6DB74"}},"''"),a("span",{style:{color:"#F8F8F2"}}," })             "),a("span",{style:{color:"#88846F"}},"// { a: '', b: 0 }")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: {
    a?: string;
} & Dict<any, string> & {
    b?: number;
}) => {
    a: string;
} & Dict<any, string> & {
    b: number;
} (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) a?: string"},"a"),e(": ")]),a("span",{style:{color:"#E6DB74"}},"''"),a("span",{style:{color:"#F8F8F2"}},[e(", "),a("data-lsp",{lsp:"(property) b?: number"},"b"),e(": ")]),a("span",{style:{color:"#AE81FF"}},"1"),a("span",{style:{color:"#F8F8F2"}}," })       "),a("span",{style:{color:"#88846F"}},"// { a: '', b: 1 }")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: {
    a?: string;
} & Dict<any, string> & {
    b?: number;
}) => {
    a: string;
} & Dict<any, string> & {
    b: number;
} (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) a?: string"},"a"),e(": ")]),a("span",{style:{color:"#E6DB74"}},"''"),a("span",{style:{color:"#F8F8F2"}},[e(", "),a("data-lsp",{lsp:"(property) b?: number"},"b"),e(": ")]),a("span",{style:{color:"#E6DB74"}},"'2'"),a("span",{style:{color:"#F8F8F2"}}," })     "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): { a: string; } & Dict<any, string> & { b: number; }', gave the following error.
    Argument of type '{ a: string; b: string; }' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: { a?: string; } & Dict<any, string> & { b?: number; }): { a: string; } & Dict<any, string> & { b: number; }', gave the following error.
    Type 'string' is not assignable to type 'number'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): { a: string; } & Dict<any, string> & { b: number; }', gave the following error.
    Argument of type '{ a: string; b: string; }' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: { a?: string; } & Dict<any, string> & { b?: number; }): { a: string; } & Dict<any, string> & { b: number; }', gave the following error.
    Type 'string' is not assignable to type 'number'.`)])])],-1),X=a("h3",{id:"schema-transform-inner-callback",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#schema-transform-inner-callback","aria-hidden":"true"},"#"),e(" Schema.transform(inner, callback)")],-1),Y=a("p",null,[e("\u58F0\u660E\u4E00\u4E2A\u53EF\u5339\u914D "),a("code",null,"inner"),e(" \u7684\u503C\uFF0C\u5E76\u8C03\u7528 "),a("code",null,"callback"),e("\uFF0C\u5C06\u8FD4\u56DE\u503C\u4F5C\u4E3A\u8F93\u51FA\u7ED3\u679C\u3002")],-1),Z=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const validate: Schema<number, number>"},"validate"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.transform<Schema<number, number>, number>(inner: Schema<number, number>, callback: (value: number) => number): Schema<number, number>"},"transform")]),a("span",{style:{color:"#F8F8F2"}},[e("("),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.number(): Schema<number, number>"},"number")]),a("span",{style:{color:"#F8F8F2"}},"()."),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<number, number>.default(value: number): Schema<number, number>"},"default")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},"), "),a("span",{style:{color:"#FD971F"}},[a("data-lsp",{lsp:"(parameter) n: number"},"n")]),a("span",{style:{color:"#F8F8F2"}}," "),a("span",{style:{color:"#66D9EF"}},"=>"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"(parameter) n: number"},"n"),e()]),a("span",{style:{color:"#F92672"}},"+"),a("span",{style:{color:"#F8F8F2"}}," "),a("span",{style:{color:"#AE81FF"}},"1"),a("span",{style:{color:"#F8F8F2"}},")")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data?: null) => number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"()                      "),a("span",{style:{color:"#88846F"}},"// 1")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: number) => number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},[a("data-err",null,"'0'")]),a("span",{style:{color:"#F8F8F2"}},")                   "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): number', gave the following error.
    Argument of type '"0"' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: number): number', gave the following error.
    Argument of type 'string' is not assignable to parameter of type 'number'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): number', gave the following error.
    Argument of type '"0"' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: number): number', gave the following error.
    Argument of type 'string' is not assignable to parameter of type 'number'.`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const validate: Schema
(data: number) => number (+1 overload)`},"validate")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"10"),a("span",{style:{color:"#F8F8F2"}},")                    "),a("span",{style:{color:"#88846F"}},"// 11")]),e(`
`)])])],-1),$=o('<h2 id="\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u4F8B\u65B9\u6CD5</h2><h3 id="schema-required" tabindex="-1"><a class="header-anchor" href="#schema-required" aria-hidden="true">#</a> schema.required()</h3><p>\u58F0\u660E\u4E00\u4E2A\u7C7B\u578B\u4E0D\u53EF\u4E3A\u7A7A\u503C (<code>null</code> \u6216 <code>undefined</code>)\u3002</p><h3 id="schema-default-value" tabindex="-1"><a class="header-anchor" href="#schema-default-value" aria-hidden="true">#</a> schema.default(value)</h3><p>\u58F0\u660E\u4E00\u4E2A\u7C7B\u578B\u7684\u9ED8\u8BA4\u503C\u3002</p><h3 id="schema-description-text" tabindex="-1"><a class="header-anchor" href="#schema-description-text" aria-hidden="true">#</a> schema.description(text)</h3><p>\u4E3A\u7C7B\u578B\u63D0\u4F9B\u63CF\u8FF0\u6587\u672C\u3002</p><h2 id="\u7B80\u5199\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199\u5F62\u5F0F" aria-hidden="true">#</a> \u7B80\u5199\u5F62\u5F0F</h2><p>\u5BF9\u4E8E\u4E0A\u8FF0\u9759\u6001\u65B9\u6CD5\uFF0C\u5176\u53C2\u6570\u53EF\u4EE5\u4F7F\u7528\u4E0B\u5217\u7684\u7B80\u5199\u5F62\u5F0F\uFF1A</p><ul><li><code>undefined</code> -&gt; <code>Schema.any()</code></li><li><code>String</code> -&gt; <code>Schema.string()</code></li><li><code>Number</code> -&gt; <code>Schema.number()</code></li><li><code>Boolean</code> -&gt; <code>Schema.boolean()</code></li><li><code>1</code> -&gt; <code>Schema.const(1)</code> (\u4EC5\u5BF9\u57FA\u7840\u7C7B\u578B\u6709\u6548)</li><li><code>Date</code> -&gt; <code>Schema.is(Date)</code></li></ul>',10),aa=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.array<StringConstructor>(inner: StringConstructor): Schema<string[], string[]>"},"array")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#66D9EF"}},[a("data-lsp",{lsp:"var String: StringConstructor"},"String")]),a("span",{style:{color:"#F8F8F2"}},")            "),a("span",{style:{color:"#88846F"}},"// Schema.array(Schema.string())")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.dict<RegExpConstructor, Schema<string, string>>(inner: RegExpConstructor, sKey?: Schema<string, string>): Schema<Dict<RegExp, string>, Dict<...>>"},"dict")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#66D9EF"}},[a("data-lsp",{lsp:"var RegExp: RegExpConstructor"},"RegExp")]),a("span",{style:{color:"#F8F8F2"}},")             "),a("span",{style:{color:"#88846F"}},"// Schema.dict(Schema.is(RegExp))")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.union<number>(list: readonly number[]): Schema<number, number>"},"union")]),a("span",{style:{color:"#F8F8F2"}},"(["),a("span",{style:{color:"#AE81FF"}},"1"),a("span",{style:{color:"#F8F8F2"}},", "),a("span",{style:{color:"#AE81FF"}},"2"),a("span",{style:{color:"#F8F8F2"}},"])            "),a("span",{style:{color:"#88846F"}},"// Schema.union([Schema.const(1), Schema.const(2)])")]),e(`
`)])])],-1),ea=a("p",null,[e("\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528 "),a("code",null,"Schema.from()"),e(" \u65B9\u6CD5\u6765\u4ECE\u7B80\u5199\u5F62\u5F0F\u83B7\u5F97\u63A8\u65AD\u540E\u7684\u7C7B\u578B\uFF1A")],-1),sa=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.from<any>(source?: any): Schema<any, any>"},"from")]),a("span",{style:{color:"#F8F8F2"}},"()                   "),a("span",{style:{color:"#88846F"}},"// Schema.any()")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.from<DateConstructor>(source?: DateConstructor): Schema<Schema<Date, Date>, Schema<Date, Date>>"},"from")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#66D9EF"}},[a("data-lsp",{lsp:"var Date: DateConstructor"},"Date")]),a("span",{style:{color:"#F8F8F2"}},")               "),a("span",{style:{color:"#88846F"}},"// Schema.is(Date)")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.from<string>(source?: string): Schema<Schema<string, string>, Schema<string, string>>"},"from")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},"'foo'"),a("span",{style:{color:"#F8F8F2"}},")              "),a("span",{style:{color:"#88846F"}},"// Schema.const('foo')")]),e(`
`)])])],-1),na=a("h2",{id:"\u4EE3\u7801\u793A\u4F8B",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u4EE3\u7801\u793A\u4F8B","aria-hidden":"true"},"#"),e(" \u4EE3\u7801\u793A\u4F8B")],-1),la=a("p",null,"\u4E0B\u9762\u662F\u4E00\u4E9B\u4F8B\u5B50\uFF0C\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528 Schema \u6784\u9020\u4E00\u4E9B\u5E38\u89C1\u7684\u9AD8\u7EA7\u7C7B\u578B\u3002",-1),oa=a("h3",{id:"\u679A\u4E3E\u7C7B\u578B",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u679A\u4E3E\u7C7B\u578B","aria-hidden":"true"},"#"),e(" \u679A\u4E3E\u7C7B\u578B")],-1),ta=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Enum: Schema<string, string>"},"Enum"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.union<string>(list: readonly string[]): Schema<string, string>"},"union")]),a("span",{style:{color:"#F8F8F2"}},"(["),a("span",{style:{color:"#E6DB74"}},"'red'"),a("span",{style:{color:"#F8F8F2"}},", "),a("span",{style:{color:"#E6DB74"}},"'blue'"),a("span",{style:{color:"#F8F8F2"}},"])")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const Enum: Schema
(data: string) => string (+1 overload)`},"Enum")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},"'red'"),a("span",{style:{color:"#F8F8F2"}},")                     "),a("span",{style:{color:"#88846F"}},"// 'red'")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const Enum: Schema
(data: string) => string (+1 overload)`},"Enum")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},"'blue'"),a("span",{style:{color:"#F8F8F2"}},")                    "),a("span",{style:{color:"#88846F"}},"// 'blue'")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const Enum: Schema
(data: string) => string (+1 overload)`},"Enum")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},"'green'"),a("span",{style:{color:"#F8F8F2"}},")                   "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`)])])],-1),ra=a("h3",{id:"\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32","aria-hidden":"true"},"#"),e(" \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32")],-1),ca=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const ToString: Schema<any, string>"},"ToString"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.transform<Schema<any, any>, string>(inner: Schema<any, any>, callback: (value: any) => string): Schema<any, string>"},"transform")]),a("span",{style:{color:"#F8F8F2"}},[e("("),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.any(): Schema<any, any>"},"any")]),a("span",{style:{color:"#F8F8F2"}},"(), "),a("span",{style:{color:"#FD971F"}},[a("data-lsp",{lsp:"(parameter) v: any"},"v")]),a("span",{style:{color:"#F8F8F2"}}," "),a("span",{style:{color:"#66D9EF"}},"=>"),a("span",{style:{color:"#F8F8F2"}}," "),a("span",{style:{color:"#66D9EF"}},[a("data-lsp",{lsp:`var String: StringConstructor
(value?: any) => string`},"String")]),a("span",{style:{color:"#F8F8F2"}},[e("("),a("data-lsp",{lsp:"(parameter) v: any"},"v"),e("))")])]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const ToString: Schema
(data: any) => string (+1 overload)`},"ToString")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},"''"),a("span",{style:{color:"#F8F8F2"}},")                    "),a("span",{style:{color:"#88846F"}},"// ''")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const ToString: Schema
(data: any) => string (+1 overload)`},"ToString")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},")                     "),a("span",{style:{color:"#88846F"}},"// '0'")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const ToString: Schema
(data: any) => string (+1 overload)`},"ToString")]),a("span",{style:{color:"#F8F8F2"}},"({})                    "),a("span",{style:{color:"#88846F"}},"// '{}'")]),e(`
`)])])],-1),pa=a("h3",{id:"\u5355\u4E2A\u503C\u6216\u8005\u5217\u8868",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u5355\u4E2A\u503C\u6216\u8005\u5217\u8868","aria-hidden":"true"},"#"),e(" \u5355\u4E2A\u503C\u6216\u8005\u5217\u8868")],-1),ia=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Listable: Schema<number | number[], number[]>"},"Listable"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.union<Schema<number[], number[]> | Schema<number, number[]>>(list: readonly (Schema<number[], number[]> | Schema<number, number[]>)[]): Schema<number | number[], number[]>"},"union")]),a("span",{style:{color:"#F8F8F2"}},"([")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[e("  "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.array<NumberConstructor>(inner: NumberConstructor): Schema<number[], number[]>"},"array")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#66D9EF"}},[a("data-lsp",{lsp:"var Number: NumberConstructor"},"Number")]),a("span",{style:{color:"#F8F8F2"}},"),")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[e("  "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.transform<NumberConstructor, number[]>(inner: NumberConstructor, callback: (value: number) => number[]): Schema<number, number[]>"},"transform")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#66D9EF"}},[a("data-lsp",{lsp:"var Number: NumberConstructor"},"Number")]),a("span",{style:{color:"#F8F8F2"}},", "),a("span",{style:{color:"#FD971F"}},[a("data-lsp",{lsp:"(parameter) n: number"},"n")]),a("span",{style:{color:"#F8F8F2"}}," "),a("span",{style:{color:"#66D9EF"}},"=>"),a("span",{style:{color:"#F8F8F2"}},[e(" ["),a("data-lsp",{lsp:"(parameter) n: number"},"n"),e("]),")])]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},"])."),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<number | number[], number[]>.default(value: number[]): Schema<number | number[], number[]>"},"default")]),a("span",{style:{color:"#F8F8F2"}},"([])")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const Listable: Schema
(data?: null) => number[] (+1 overload)`},"Listable")]),a("span",{style:{color:"#F8F8F2"}},"()                      "),a("span",{style:{color:"#88846F"}},"// []")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const Listable: Schema
(data: number | number[]) => number[] (+1 overload)`},"Listable")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#AE81FF"}},"0"),a("span",{style:{color:"#F8F8F2"}},")                     "),a("span",{style:{color:"#88846F"}},"// [0]")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const Listable: Schema
(data: number | number[]) => number[] (+1 overload)`},"Listable")]),a("span",{style:{color:"#F8F8F2"}},"(["),a("span",{style:{color:"#AE81FF"}},"1"),a("span",{style:{color:"#F8F8F2"}},", "),a("span",{style:{color:"#AE81FF"}},"2"),a("span",{style:{color:"#F8F8F2"}},"])                "),a("span",{style:{color:"#88846F"}},"// [1, 2]")]),e(`
`)])])],-1),da=a("h3",{id:"\u5BF9\u8C61\u952E\u503C\u522B\u540D",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u5BF9\u8C61\u952E\u503C\u522B\u540D","aria-hidden":"true"},"#"),e(" \u5BF9\u8C61\u952E\u503C\u522B\u540D")],-1),ma=a("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[a("div",{class:"code-container"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#66D9EF"}},"const"),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Config: Schema<Dict<number, string>, Dict<number, string>>"},"Config"),e()]),a("span",{style:{color:"#F92672"}},"="),a("span",{style:{color:"#F8F8F2"}},[e(),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.dict<NumberConstructor, Schema<string, string>>(inner: NumberConstructor, sKey?: Schema<string, string>): Schema<Dict<number, string>, Dict<...>>"},"dict")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#66D9EF"}},[a("data-lsp",{lsp:"var Number: NumberConstructor"},"Number")]),a("span",{style:{color:"#F8F8F2"}},[e(", "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.union<string | Schema<string, string>>(list: readonly (string | Schema<string, string>)[]): Schema<string, string>"},"union")]),a("span",{style:{color:"#F8F8F2"}},"([")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},"  "),a("span",{style:{color:"#E6DB74"}},"'foo'"),a("span",{style:{color:"#F8F8F2"}},",")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},[e("  "),a("data-lsp",{lsp:"const Schema: Schema.Static"},"Schema"),e(".")]),a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:"(method) Schema<S = any, T = S>.Static.transform<string, string>(inner: string, callback: (value: string) => string): Schema<string, string>"},"transform")]),a("span",{style:{color:"#F8F8F2"}},"("),a("span",{style:{color:"#E6DB74"}},"'bar'"),a("span",{style:{color:"#F8F8F2"}},", () "),a("span",{style:{color:"#66D9EF"}},"=>"),a("span",{style:{color:"#F8F8F2"}}," "),a("span",{style:{color:"#E6DB74"}},"'foo'"),a("span",{style:{color:"#F8F8F2"}},"),")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F8F8F2"}},"]))")]),e(`
`),a("span",{class:"line"},"\xA0"),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const Config: Schema
(data: Dict<number, string>) => Dict<number, string> (+1 overload)`},"Config")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) foo: number"},"foo"),e(": ")]),a("span",{style:{color:"#AE81FF"}},"1"),a("span",{style:{color:"#F8F8F2"}}," })              "),a("span",{style:{color:"#88846F"}},"// { foo: 1 }")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const Config: Schema
(data: Dict<number, string>) => Dict<number, string> (+1 overload)`},"Config")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) bar: number"},"bar"),e(": ")]),a("span",{style:{color:"#AE81FF"}},"2"),a("span",{style:{color:"#F8F8F2"}}," })              "),a("span",{style:{color:"#88846F"}},"// { foo: 2 }")]),e(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6E22E"}},[a("data-lsp",{lsp:`const Config: Schema
(data: Dict<number, string>) => Dict<number, string> (+1 overload)`},"Config")]),a("span",{style:{color:"#F8F8F2"}},[e("({ "),a("data-lsp",{lsp:"(property) bar: string"},"bar"),e(": ")]),a("span",{style:{color:"#E6DB74"}},"'3'"),a("span",{style:{color:"#F8F8F2"}}," })            "),a("span",{style:{color:"#88846F"}},"// TypeError")]),e(`
`),a("span",{class:"error"},[a("span",null,`No overload matches this call.
  Overload 1 of 2, '(data?: null): Dict<number, string>', gave the following error.
    Argument of type '{ bar: string; }' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: Dict<number, string>): Dict<number, string>', gave the following error.
    Type 'string' is not assignable to type 'number'.`),a("span",{class:"code"},"2769")]),a("span",{class:"error-behind"},`No overload matches this call.
  Overload 1 of 2, '(data?: null): Dict<number, string>', gave the following error.
    Argument of type '{ bar: string; }' is not assignable to parameter of type 'null'.
  Overload 2 of 2, '(data: Dict<number, string>): Dict<number, string>', gave the following error.
    Type 'string' is not assignable to type 'number'.`)])])],-1);function Fa(ha,ya){const s=r("panel-view");return c(),p(i,null,[m,n(s,{class:"code",title:"",style:{}},{default:l(()=>[F]),_:1}),h,y,n(s,{class:"code",title:"",style:{}},{default:l(()=>[u]),_:1}),b,S,n(s,{class:"code",title:"",style:{}},{default:l(()=>[g]),_:1}),v,E,n(s,{class:"code",title:"",style:{}},{default:l(()=>[f]),_:1}),A,_,n(s,{class:"code",title:"",style:{}},{default:l(()=>[D]),_:1}),T,O,n(s,{class:"code",title:"",style:{}},{default:l(()=>[w]),_:1}),k,x,n(s,{class:"code",title:"",style:{}},{default:l(()=>[N]),_:1}),j,C,n(s,{class:"code",title:"",style:{}},{default:l(()=>[B]),_:1}),R,L,n(s,{class:"code",title:"",style:{}},{default:l(()=>[q]),_:1}),V,K,n(s,{class:"code",title:"",style:{}},{default:l(()=>[z]),_:1}),G,H,n(s,{class:"code",title:"",style:{}},{default:l(()=>[I]),_:1}),J,M,n(s,{class:"code",title:"",style:{}},{default:l(()=>[P]),_:1}),Q,U,n(s,{class:"code",title:"",style:{}},{default:l(()=>[W]),_:1}),X,Y,n(s,{class:"code",title:"",style:{}},{default:l(()=>[Z]),_:1}),$,n(s,{class:"code",title:"",style:{}},{default:l(()=>[aa]),_:1}),ea,n(s,{class:"code",title:"",style:{}},{default:l(()=>[sa]),_:1}),na,la,oa,n(s,{class:"code",title:"",style:{}},{default:l(()=>[ta]),_:1}),ra,n(s,{class:"code",title:"",style:{}},{default:l(()=>[ca]),_:1}),pa,n(s,{class:"code",title:"",style:{}},{default:l(()=>[ia]),_:1}),da,n(s,{class:"code",title:"",style:{}},{default:l(()=>[ma]),_:1})],64)}var ba=t(d,[["render",Fa],["__file","schema.html.vue"]]);export{ba as default};
