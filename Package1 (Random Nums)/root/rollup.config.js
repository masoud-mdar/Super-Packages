import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";


export default [
    {
        input: "src/index.js",
        output: {
            name: "masoud-random-numbers-1",
            file: pkg.browser,
            format: "umd",
        },
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: ["node_modules/**"]
            })
        ]
    }, 

    {
        input: "src/index.js",
        output: [
            {file: pkg.main, format: "cjs"},
            {file: pkg.module, format: "es"}
        ]
    }
]