# lint-doc

## Usage

### Example workflow

```yml
jobs:
  lint-doc:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout tree
        uses: actions/checkout@v7
      - name: Set-up OCaml
        uses: step-security/setup-ocaml@v3
        with:
          ocaml-compiler: 5
      - uses: step-security/setup-ocaml/lint-doc@v3
```

## Inputs

Consult the [action.yml](./action.yml) for inputs.
