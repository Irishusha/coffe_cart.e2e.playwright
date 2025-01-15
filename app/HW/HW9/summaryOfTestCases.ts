const testCases = [
    { id: 1, description: "Login with valid credentials", status: "passed" },
    { id: 2, description: "Login with invalid credentials", status: "failed" },
    { id: 3, description: "Forgot password flow", status: "skipped" },
    { id: 4, description: "Update profile", status: "passed" },
    { id: 5, description: "Delete account", status: "failed" },
];
type TestResults = {
    passed: {
        count: 0;
        descriptions: string[];
    };
    failed: {
        count: 0;
        descriptions: string[];
    };
    skipped: {
        count: 0;
        descriptions: string[];
    };
};
const testResults: TestResults = {
    passed: { count: 0, descriptions: [] },
    failed: { count: 0, descriptions: [] },
    skipped: { count: 0, descriptions: [] },
};

function summaryOfTestCases(testCases: Array<{ id: number; description: string; status: string }>, testResults: TestResults): TestResults {
    for (const testCase of testCases) {
        testResults[testCase.status].count++;
        testResults[testCase.status].descriptions.push(testCase.description);
    }
    return testResults; 
}

const result = summaryOfTestCases(testCases, testResults);
console.log(result);
