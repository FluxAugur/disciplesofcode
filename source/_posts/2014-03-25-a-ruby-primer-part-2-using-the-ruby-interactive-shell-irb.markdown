---
layout: post
title: "A Ruby Primer - Part 2: Using the Ruby Interactive Shell (IRB)"
author: FluxAugur
date: 2014-03-25 04:29:18 -0400
comments: true
sharing: true
categories: [Coding, Learning, Teaching, How, Code, Ruby, IRB]
---
### Part 2: Using the Ruby Interactive Shell (IRB)

If you have not yet set up your development environment, please refer to [Part 1]({{ root_url }}/blog/2014/03/a-ruby-primer-part-1-setting-up-your-development-environment/) of this primer.

The Ruby Interactive Shell, or IRB, provides a command line with which we can immediately evaluate a Ruby statement or expression. To load IRB, open a Terminal window (OS X or Linux) or a Command Prompt (Windows), and execute the following command.

``` bash Loading IRB
$ irb
```

You should now be inside IRB, and should have a command prompt similar to the following.

``` bash IRB command prompt
irb(main):001:0>
```

In Ruby, a literal number evaluates to itself. (Note that each line beginning with 'irb(main)' is a command prompt, and each line beginning with '=>' is the resultant evaluation of the statement or expression to be evaluated.)

``` bash Evaluation of a literal number
irb(main):001:0> 1
=> 1
```

An arithmetic expression evaluates to the result of the expression, taking into account order of precedence of arithmetic operators (more on this in future parts of the Ruby primer).

``` bash Evaluation of an arithmetic expression
irb(main):002:0> 1+2
=> 3
irb(main):003:0> 3*3
=> 9
irb(main):004:0> 1+2*3
=> 7
```

Strings evaluate to themselves, and can be concatenated (using the '+' operator).

``` bash Evaluation of a string
irb(main):005:0> "hello, world"
=> "hello, world"
irb(main):006:0> "hello, " + "world"
=> "hello, world"
```

Data can be stored in variables (using the '=' operator, and the variable will evaluate to the contents of the variable.

``` bash Storing data in and evaluating variables
irb(main):007:0> greeting = "hello"
=> "hello"
irb(main):008:0> greeting
=> "hello"
```

Variables can be concatenated (again, using the '+' operator).

``` bash Concatenating and evaluating variables
irb(main):009:0> greeting + ", world"
=> "hello, world"
irb(main):010:0> subject = "world"
=> "world"
irb(main):011:0> greeting + ", " + subject
=> "hello, world"
```

Complex expressions can be evaluated. (Don't worry too much about what exactly is happening here, as it will be covered in-depth in future parts of this Ruby primer.)

``` bash Evaluating a complex expression
irb(main):012:0> i = 1
=> 1
irb(main):013:0> while i < 100
irb(main):014:1>   print i
irb(main):015:1>   i += 1
irb(main):016:1> end
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899=> nil
```

Functions can be defined and evaluated. (Note that in Ruby, functions do not require a 'return' statement, you can just have an expression. If that expression is the last statement, that is what will be returned.)

``` bash Defining and evaluating functions
irb(main):017:0> def square(n)
irb(main):018:1>   return n * n
irb(main):019:1> end
=> nil
irb(main):020:0> square(2)
=> 4
irb(main):021:0> square(4)
=> 16
irb(main):022:0> def sum(num1, num2)
irb(main):023:1>   num1 + num2
irb(main):024:1> end
=> nil
irb(main):025:0> sum(1, 2)
=> 3
```

You can exit IRB by using the 'quit' command, and will be returned to your regular command prompt.

``` bash Exiting IRB
irb(main):026:0> quit
$
```

Congratulation! You have just gotten your feet wet using Ruby and the Ruby Interactive Shell (IRB).
