/*
 * @Description:代码规范文件
 */
module.exports = {
  root: true,
  rules: {
    eqeqeq: 2, // 必须使用全等
    semi: [1, "never"], // 行尾分号不展示分号（'always'，展示分号）
    quotes: [1, "single"], // 单引号替代双引号
    // "no-unused-vars": 0, // 定义未使用的变量
    // "no-multi-spaces": 2, // 禁止使用多个空格
    // "no-irregular-whitespace": 2, // 不能有不规则的空格
    // "new-parens": 2, // 要求调用无参构造函数时有圆括号
    // "no-multiple-empty-lines": 2, // 禁止出现多行空行
    // "new-cap": 1, // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    // "arrow-spacing": 2, // =>的前/后括号
    // "no-var": 2, // 禁用var，用let和const代替
    // "no-spaced-func": 2, // 函数调用时 函数名与()之间不能有空格
    // "no-trailing-spaces": 2, // 一行结束后面不要有空格
    // "no-extra-semi": 2, // 禁止多余的冒号
    // "comma-spacing": 2, // 逗号后面的空格
    // "default-case": 2, // switch语句最后必须有default
    // "key-spacing": [2, { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
    // "semi-spacing": [2, { before: false, after: true }], // 分号前后空格
    // "space-before-function-paren": [0], // 函数定义时括号前面要有空格
    // "space-before-blocks": [2, "always"], // 不以新行开始的块{前面要有空格
    // "spaced-comment": 2, // 注释风格要有空格什么的
    // "use-isnan": 2, // 禁止比较时使用NaN，只能用isNaN()
    // "space-infix-ops": 2, // 要求操作符周围有空格
    // "vue/no-mutating-props": "warn", // 规定不可以修改props
    // "vue/attribute-hyphenation": "warn", // 规定组件上的自定义属性命名以中划线命名 ( 例如 data-name )
    // "no-debugger": 1, // 禁止debugger
    // "@typescript-eslint/explicit-module-boundary-types": 0, // 显示的设置返回值
    // "@typescript-eslint/no-unused-vars": 0, // 消除未使用的变量，函数和函数的参数
  },
};
