# Unit Testing
Ensure our component/function/hooks working correctly also it can throw error or give us feedback when it was changed.

## Keywords
Wording in unit-testing field, may have another depends on Programming Language/ Framework etc...

Test framework (we use @testing-library/react)-> contain tools,helper for testing a component/function

Test Runner (we use vitest) -> Can compile Test, build test like complier in programming language

Test Case -> every case situation in function/component/class other...

Test Doubles -> Simulate/Mock dependency of focus test which not call the real method.

Coverage -> measure does implemented test reach over covering code/condition to percentage

File name it depends Test Runner or Config, like we should name extension with `.test.ts` or `.spec.ts` .
Other all tests stored in folder `__tests__` etc.

unit-testing in React, contains scope(describe) and test case(it(""), or test(""))

First the Scope, group multiple relate test cases, scope can be nested.

```javascript
describe("useThaiWin", () => {
	test("1")
	test("2")
	test("3")
	test("4")
})

    describe("calculator", () => {
        describe("minus", () => { ... })
        describe("plus", () => { ... })
        describe("multiply", () => { ... })
    })
```

## Test Case
Good unit-testing should be;

1.  Each test is solid separately
1.  One test-case, One problem
1.  name the test with pattern `Test, when should`
1.  mostly contains these sections `Arrange`, `Act`, `Assert`, `Clean`

    ```javascript
    test("cal multiply when a is 5 and b is 6 should be 30", () => {
    	// Arrange -> prepare minimum requirement for component
    	// Act -> Scenario for testing that we expected
    	// Assert -> expect result that we expected
    	// Clean -> optional if we need to reset something before go to other test case
    })
    ```

example

```javascript
const calMultiply = (a, b) => {
	return a * b
}

test("calMultiply when a is 5 and b is 6 should be 30", () => {
	// Arrange
	const a = 5
	const b = 6
	const expectResult = 30

	// Act
	const result = calMultiply(5, 6)

	// Assert
	expect(result).toEqual(expectResult)
})
```

if we want to add divine operation, so we need to add new test case for divine, luckily we set default isDivine false so we don't need to update the first test case

```javascript
const calMultiplyAndDivine = (a, b, isDivine: boolean = false) => {
	if (isDivine) {
		return a / b
	}

	return a * b
}

describe("calMultiplyAndDivine", () => {
	test("calMultiply when a is 5 and b is 6 should be 30", () => {
		// Arrange
		const a = 5
		const b = 6
		const expectResult = 30

		// Act
		const result = calMultiply(a, b)

		// Assert
		expect(result).toEqual(expectResult)
	})

	test("calMultiply with divine when a is 30 and b is 5 should be 6", () => {
		// Arrange
		const a = 30
		const b = 5
		const expectResult = 6

		// Act
		const result = calMultiply(a, b, true)

		// Assert
		expect(result).toEqual(expectResult)
	})
})
```

but number cannot divine by zero, so we should add condition and test for this case

```javascript
const calMultiplyAndDivine = (a, b, isDivine: boolean = false) => {
	if (isDivine) {
		if (b === 0) {
			throw new Error("b cannot be 0")
		}

		return a / b
	}

	return a * b
}

test("divine when b = 0 should got error `b cannot be 0`", () => {
	// Arrange
	const a = 5
	const b = 0
	const expectResult = "b cannot be 0"

	// Act & Assert
	expect(() => calculator(5, 0, true)).toThrowError(expectResult)
})
```

if we want to add plus operation, we can modify like change `isDivine` to multiple type or enum, then we change old test cases too

```javascript
// good idea to rename function to calculator
const calculator = (
	a: number,
	b: number,
	operation: "plus" | "divine" | "multiply" = "multiply"
) => {
	if (operation === "divine") {
		if (b === 0) {
			throw new Error("b cannot be 0")
		}

		return a / b
	} else if (operation === "plus") {
		return a + b
	}

	return a * b
}

describe("calculator", () => {
	test("multiply when a is 5 and b is 6 should be 30", () => {
		// Arrange
		const a = 5
		const b = 6
		const expectResult = 30

		// Act
		const result = calMultiply(a, b)

		// Assert
		expect(result).toEqual(expectResult)
	})

	test("divine when a is 30 and b is 5 should be 6", () => {
		// Arrange
		const a = 30
		const b = 5
		const expectResult = 6

		// Act
		const result = calMultiply(a, b, "divine")

		// Assert
		expect(result).toEqual(expectResult)
	})

	test("divine when b = 0 should got error `b cannot be 0`", () => {
		// Arrange
		const a = 5
		const b = 0
		const expectResult = "b cannot be 0"

		// Act & Assert
		expect(() => calculator(5, 0, "divine")).toThrowError(expectResult)
	})

	test("plus when b = 11, a = 22 should be 33", () => {
		// Arrange
		const a = 11
		const b = 22
		const expectResult = 33

		// Act
		const result = calMultiply(a, b, "plus")

		// Assert
		expect(result).toEqual(expectResult)
	})
})
```

but good function should work one method right?
so we can refactor

```javascript
//operation.ts
export const plusOperation = (a: number, b: number): number => a + b

export const divineOperation = (a: number, b: number): number => {
	if (b === 0) {
		throw new Error("b cannot be 0")
	}

	return a / b
}

export const multiplyOperation = (a: number, b: number): number => a * b

// calculator.ts
import { divineOperation, multiplyOperation, plusOperation } from "./operation"

export const calculator = (
	a: number,
	b: number,
	operation: "plus" | "divine" | "multiply" = "multiply"
) => {
	if (operation === "divine") {
		return divineOperation(a, b)
	} else if (operation === "plus") {
		return plusOperation(a, b)
	}

	return multiplyOperation(a, b)
}
```

then, refactor test which move logic to `operation.test.ts` instead

```javascript
import { divineOperation, multiplyOperation, plusOperation } from "./operation"

describe("operation", () => {
	describe("divineOperation", () => {
		test("a is 30 and b is 5 should be 6", () => {
			// Arrange
			const a = 30
			const b = 6
			const expectResult = 5

			// Act
			const result = divineOperation(a, b)

			// Assert
			expect(result).toEqual(expectResult)
		})

		test("b = 0 should got error `b cannot be 0`", () => {
			// Arrange
			const a = 5
			const b = 0
			const expectResult = "b cannot be 0"

			// Act & Assert
			expect(() => divineOperation(a, b)).toThrowError(expectResult)
		})
	})

	describe("plusOperation", () => {
		test("plus when b = 11, a = 22 should be 33", () => {
			// Arrange
			const a = 11
			const b = 22
			const expectResult = 33

			// Act
			const result = plusOperation(a, b)

			// Assert
			expect(result).toEqual(expectResult)
		})
	})

	describe("multiplyOperation", () => {
		test("multiply when a is 5 and b is 6 should be 30", () => {
			// Arrange
			const a = 5
			const b = 6
			const expectResult = 30

			// Act
			const result = multiplyOperation(a, b)

			// Assert
			expect(result).toEqual(expectResult)
		})
	})
})
```

What about calculator function? how to test it?

## Test Doubles

We can simulate dependencies of function which not to call actual like call API we just fake call not real call API especially in Unit-testing which need to separately.
Example method (but it call difference depend of Test Framework)

1. Stub, simplest; They are typically used to replace a method that returns a value that is needed for the test or just make minimum dependency of function to make it pass.
2. Spies, Record information about how they were called, such as the number of times called, the arguments with which they were called, etc.
3. Mocks or Fakes, re-implementation that dependencies to make sure it suite our test case e.g. change database stored in memory (Dependency Injection is the good example since we communicate with interface only, so we can implemented with the same interface)

But we use `Vitest`

`vi.spyOn` it combine Stub and Spies mean it can just tracking called without call a real function also, can mock return or mock implementation

```javascript
import { calculator } from "./calculator"
// spyOn API accept params with (object, method) so we wrap all export to one object call operation
import * as operation from "./operation"

describe("calculator", () => {
	test("input plus should called plusOperation", () => {
		// Arrange
		const spyPlus = vi.spyOn(operation, "plusOperation")
		const spyDivine = vi.spyOn(operation, "divineOperation")

		const a = 5
		const b = 6

		// Act
		calculator(a, b, "plus")

		// Assert
		expect(spyPlus).toHaveBeenCalledOnce()
		expect(spyPlus).toHaveBeenCalledWith(a, b)
		expect(spyDivine).not.toHaveBeenCalled()

		// Clean up
		vi.restoreAllMocks()
	})
})
```

`vi.mock`
Mock all root file

```javascript
import { calculator } from "./calculator"
import { plusOperation, divineOperation, multiplyOperation } from "./operation"

vi.mock("./operation.ts", () => ({
	plusOperation: vi.fn(),
	divineOperation: vi.fn(),
	multiplyOperation: vi.fn(),
}))

describe("calculator", () => {
	test("input plus should called plusOperation", () => {
		// Arrange
		const a = 5
		const b = 6

		// Act
		calculator(a, b, "plus")

		// Assert
		expect(plusOperation).toHaveBeenCalledOnce()
		expect(plusOperation).toHaveBeenCalledWith(a, b)
		expect(divineOperation).not.toHaveBeenCalled()

		// Clean up
		vi.resetAllMocks()
	})

	test("input multiply should called multiplyOperation", () => {
		// Arrange

		const a = 5
		const b = 6

		// Act
		calculator(a, b, "multiply")

		// Assert
		expect(multiplyOperation).toHaveBeenCalledOnce()
		expect(multiplyOperation).toHaveBeenCalledWith(a, b)
		expect(divineOperation).not.toHaveBeenCalled()

		// Clean up
		vi.resetAllMocks()
	})
})
```

Read more: https://vitest.dev/guide/mocking.html

## UI Testing

In Presentation component we show some view and we make sure it show as we expected
It have many third party help react test, now we `@testing-library/react"`

### Snapshot Test

we save latest change of the component, if some one edit the file accidentally it will throw error

```javascript
import MainContent from "./MainContent"

describe("MainContent", () => {
	test("snapshot", () => {
		expect(MainContent()).toMatchSnapshot()
	})
})
```

or we need to update more latest version of component
we use can

```
npx vitest -u
// or
npx vitest --update

```

### Test with Render Screen

```javascript
// ContentLoaded.tsx
const ContentLoaded = ({ isFinished }: { isFinished: boolean }) => {
	return (
		<div>
			{isFinished ? <h1>Content Finished</h1> : <h1>Content Loading</h1>}
		</div>
	)
}

export default ContentLoaded

// ContentLoaded.test.tsx
import { render, screen } from "@testing-library/react"
import ContentLoaded from "./ContentLoaded"

describe("ContentLoaded", () => {
	test("isFinished is true should show `Content Finished`", async () => {
		// Arrange
		const isFinished = true
		render(<ContentLoaded isFinished={isFinished} />)

		// Act
		await screen.findByRole("heading")

		// Assert
		expect(screen.getByRole("heading")).toHaveTextContent("Content Finished")
	})

	test("isFinished is false should show `Content Loading`", async () => {
		// Arrange
		const isFinished = false
		render(<ContentLoaded isFinished={isFinished} />)

		// Act
		await screen.findByRole("heading")

		// Assert
		expect(screen.getByRole("heading")).toHaveTextContent("Content Loading")
	})
})
```

### debug UI 
While implementing test use  `screen.debug()` after render a component

```javascript
import { render, screen } from "@testing-library/react"

screen.debug()
```

### Query Element
React testing library has api for getting or querying element while we write unit-testing

#### Single Elements
getBy...: Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found.

queryBy...: Returns the matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found.

findBy...: Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms.

#### Multiple Elements
getAllBy...: Returns an array of all matching nodes for a query, and throws an error if no elements match.

queryAllBy...: Returns an array of all matching nodes for a query, and return an empty array ([]) if no elements match.

findAllBy...: Returns a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of 1000ms.
findBy methods are a combination of getBy* queries and waitFor. They accept the waitFor options as the last argument (i.e. await screen.findByText('text', queryOptions, waitForOptions))

Read more API: https://testing-library.com/docs/react-testing-library/intro
