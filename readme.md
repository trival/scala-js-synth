# testing scala-cli

For scala compilation, scala-cli is used. The scala config code is in the file
`project.scala`. To build the scala code, run the following command:

```bash
scala-cli --power package --js . -f -o src/scala
```
