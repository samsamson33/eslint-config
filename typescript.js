const baseConfig = require(".");

const extentionRules = (() => {
	const rules = {};

	const ruleList = [
		"brace-style",
		"comma-spacing",
		"default-param-last",
		"dot-notation",
		"func-call-spacing",
		"indent",
		"init-declarations",
		"keyword-spacing",
		"lines-between-class-members",
		"no-array-constructor",
		"no-dupe-class-members",
		"no-empty-function",
		"no-extra-parens",
		"no-extra-semi",
		"no-invalid-this",
		"no-loss-of-precision",
		"no-magic-numbers",
		"no-unused-expressions",
		"no-unused-vars",
		"no-use-before-define",
		"no-useless-constructor",
		"quotes",
		"require-await",
		"no-return-await",
		"semi",
		"space-before-function-paren"
	];

	for (const rule of ruleList) {
		// typescript-eslint gives the no-return-await extention rule the name return-await
		const tsRule = rule === "no-return-await" ? "return-await" : rule;

		rules[`@typescript-eslint/${tsRule}`] = baseConfig.rules[rule];
		rules[rule] = "off";
	}

	return rules;
})();

const tsRules = {
	"@typescript-eslint/adjacent-overload-signatures": "error",
	"@typescript-eslint/array-type": ["error", { default: "array-simple" }],
	"@typescript-eslint/await-thenable": "error",
	"@typescript-eslint/ban-ts-comment": ["error", {
		"ts-expect-error": "allow-with-description",
		"ts-ignore": "allow-with-description",
		"ts-nocheck": "allow-with-description",
		"ts-check": false
	}],
	"@typescript-eslint/ban-tslint-comment": "error",
	// "@typescript-eslint/ban-types": "off",
	"@typescript-eslint/class-literal-property-style": "off",
	"@typescript-eslint/consistent-type-assertions": "error",
	"@typescript-eslint/consistent-type-definitions": ["error", "type"],
	"@typescript-eslint/explicit-function-return-type": "off",
	"@typescript-eslint/explicit-member-accessibility": "error",
	"@typescript-eslint/explicit-module-boundary-types": "off",
	"@typescript-eslint/member-delimiter-style": "error",
	"@typescript-eslint/member-ordering": "off",
	"@typescript-eslint/method-signature-style": "error",
	"@typescript-eslint/naming-convention": "off",
	"@typescript-eslint/no-base-to-string": "error",
	"@typescript-eslint/no-confusing-non-null-assertion": "warn",
	"@typescript-eslint/no-dynamic-delete": "warn",
	"@typescript-eslint/no-empty-interface": "error",
	"@typescript-eslint/no-explicit-any": "error",
	"@typescript-eslint/no-extra-non-null-assertion": "error",
	"@typescript-eslint/no-extraneous-class": "off",
	"@typescript-eslint/no-floating-promises": "error",
	"@typescript-eslint/no-for-in-array": "error",
	"@typescript-eslint/no-implicit-any-catch": "error",
	"@typescript-eslint/no-implied-eval": "error",
	"@typescript-eslint/no-inferrable-types": "error",
	"@typescript-eslint/no-invalid-void-type": "error",
	"@typescript-eslint/no-misused-new": "error",
	"@typescript-eslint/no-misused-promises": "error",
	"@typescript-eslint/no-namespace": "error",
	"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
	"@typescript-eslint/no-non-null-assertion": "off",
	"@typescript-eslint/no-parameter-properties": "off",
	"@typescript-eslint/no-require-imports": "error",
	"@typescript-eslint/no-this-alias": ["error", { allowDestructuring: true }],
	"@typescript-eslint/no-throw-literal": "error",
	"@typescript-eslint/no-type-alias": "off",
	"@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
	"@typescript-eslint/no-unnecessary-condition": ["error", { allowConstantLoopConditions: true }],
	"@typescript-eslint/no-unnecessary-qualifier": "error",
	"@typescript-eslint/no-unnecessary-type-arguments": "error",
	"@typescript-eslint/no-unnecessary-type-assertion": "error",
	"@typescript-eslint/no-unsafe-assignment": "error",
	"@typescript-eslint/no-unsafe-call": "error",
	"@typescript-eslint/no-unsafe-member-access": "error",
	"@typescript-eslint/no-unsafe-return": "error",
	"@typescript-eslint/no-unused-vars-experimental": "off",
	"@typescript-eslint/no-var-requires": "error",
	"@typescript-eslint/prefer-as-const": "error",
	"@typescript-eslint/prefer-enum-initializers": "off",
	"@typescript-eslint/prefer-for-of": "error",
	"@typescript-eslint/prefer-function-type": "error",
	"@typescript-eslint/prefer-includes": "error",
	"@typescript-eslint/prefer-literal-enum-member": "off",
	"@typescript-eslint/prefer-namespace-keyword": "error",
	"@typescript-eslint/prefer-nullish-coalescing": "error",
	"@typescript-eslint/prefer-optional-chain": "warn",
	"@typescript-eslint/prefer-readonly": "off",
	"@typescript-eslint/prefer-readonly-parameter-types": "off",
	"@typescript-eslint/prefer-reduce-type-parameter": "warn",
	"@typescript-eslint/prefer-regexp-exec": "error",
	"@typescript-eslint/prefer-string-starts-ends-with": "error",
	"@typescript-eslint/prefer-ts-expect-error": "error",
	"@typescript-eslint/promise-function-async": "error",
	"@typescript-eslint/require-array-sort-compare": "warn",
	"@typescript-eslint/restrict-plus-operands": "error",
	"@typescript-eslint/restrict-template-expressions": "off",
	"@typescript-eslint/strict-boolean-expressions": "off",
	"@typescript-eslint/switch-exhaustiveness-check": "off",
	"@typescript-eslint/triple-slash-reference": "error",
	"@typescript-eslint/type-annotation-spacing": "error",
	"@typescript-eslint/typedef": "off",
	"@typescript-eslint/unbound-method": "off",
	"@typescript-eslint/unified-signature": "off"
};

module.exports = {
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parser: "@typescript-eslint/parser",
			plugins: ["@typescript-eslint"],
			rules: { ...extentionRules, ...tsRules }
		}
	]
};
