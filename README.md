matkhau-cli
======

`matkhau` is a node command line application that generates a strong password right in your terminal.

**About the name.**

`matkhau` is combined from 2 Vietnamese words `mat khau` that means `password`.

<!-- toc -->
* [Install](#install)
* [Usage](#usage)
* [Contribute](#contribute)
* [License](#license)
<!-- tocstop -->

## Install

```bash
npm install -g matkhau-cli
# OR
yarn global add matkhau-cli
```

## Usage

1 Create a password with options.

```bash
matkhau create
```

2 Quickly create a password without any options.

`--quick` flag allows the command to create a password automatically with 32 characters long including the special chars.

```bash
matkhau create --quick
```

## Contribute

```bash
# clone the repository
git clone https://github.com/tatthien/matkhau.git

# install dependencies 
cd matkhau
yarn
```

## License

MIT © [Thien Nguyen](https://tatthien.com)
