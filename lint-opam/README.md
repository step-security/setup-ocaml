# lint-opam

## Usage

### Example workflow

```yml
jobs:
  lint-opam:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout tree
        uses: actions/checkout@v7
      - name: Set-up OCaml
        uses: step-security/setup-ocaml@v3
        with:
          ocaml-compiler: 5
      - uses: step-security/setup-ocaml/lint-opam@v3
```

## Inputs

Consult the [action.yml](./action.yml) for inputs.
