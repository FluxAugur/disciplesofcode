---
layout: post
title: "A Ruby Primer - Part 1: Setting Up Your Development Environment"
author: FluxAugur
date: 2014-03-24 06:44:21 -0500
comments: true
sharing: true
categories: [Coding, Learning, Teaching, How, Code, Ruby]
---
### Part 1: Setting Up Your Development Environment

The first step to learning Ruby (or any programming language) is to set up your development environment, so let's dive right in.

The simplest method is to use a free, online development environment, such as those provided by [Koding.com](https://koding.com/R/nathanialmcconnell). If you have already signed up for a [GitHub](https://github.com/) account (which is highly recommended for source control and for sharing your code), you can sign up for Koding.com using your GitHub account credentials. As part of our goal of collaborative learning, we will be using both Koding.com and GitHub in the future, but neither are required to be able to complete this Ruby primer.

The alternative to using an online development environment is to install Ruby on your local development machine (e.g. your desktop or laptop computer).

- #### Installing Ruby on Windows
The easiest way to install Ruby on Windows is by using the [RubyInstaller](http://rubyinstaller.org/). We will be using Ruby 2.0.0-p451 (patch level 451 of Ruby version 2.0.0). Simply download the [32-bit](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.0.0-p451.exe?direct) or [64-bit](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.0.0-p451-x64.exe?direct) versions of the RubyInstaller, and run the downloaded program. When presented with the Setup dialog box, please *select* **all** of the given options (as indicated in the following screenshot).

- #### Installing Ruby on OS X or Linux
The easiest way to install Ruby on OS X or Linux is by using the [Ruby Version Manager (RVM)](http://rvm.io/). To do so, open a Terminal window and execute the following command.

``` bash Installing RVM and Ruby
$ \curl -sSL https://get.rvm.io | bash -s stable --ruby
```

Once you have Ruby installed, you can verify your installation (and check the Ruby version) by opening up a Terminal window (OS X or Linux) or a Command Prompt (Windows) and executing the following command on your command line.

``` bash Checking your Ruby version
$ ruby -v
```

Congratulations! You're ready to get started with Ruby. In [Part 2]({{ root_url }}/blog/2014/03/a-ruby-primer-part-2-using-the-ruby-interactive-shell-irb/) of this primer, we will explore using the Ruby Interactive Shell (IRB).
