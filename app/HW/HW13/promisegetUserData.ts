async function getUserData(): Promise<{ name: string; age: number }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "John", age: 30 });
        }, 1000);
    });
}

getUserData()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.error(error);
    });

// v2

async function getUserDataV2(): Promise<{ name: string; age: number }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "John", age: 30 });
        }, 1000);
    });
}

async function userInfo() {
    try {
        const userInfo = await getUserDataV2();
        console.log(userInfo);
    } catch (error) {
        console.error(error);
    }
}
userInfo();
