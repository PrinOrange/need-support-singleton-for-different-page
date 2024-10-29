const buildMySingleton = async ():Promise<{value:string}> => {
  return new Promise((resolve) => {
    console.log("\nStart building my singleton");

    // Here is a progress of building singleton that costs much time
    setTimeout(() => {
      resolve({ value: "data" });
    }, 20000);
  });
};

export const MySingleton = await buildMySingleton();
