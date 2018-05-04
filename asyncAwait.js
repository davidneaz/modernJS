import ping from "net-ping";

// Basic promise making demo

function testServer(uri) {
  if (!uri) {
    throw "URI to test was not passed";
  }

  return new Promise((resolve, reject) => {
    let session = ping.createSession();

    session.pingHost(uri, function(error, target) {
      if (error) {
        reject(`${target}: ${error.toString()}`);
      } else {
        resolve(`${target}: Alive`);
      }
    });
  });
}

async function testGoogle() {
  const uri = "172.217.5.110";

  try {
    const result = await testServer(uri);
    console.log(`Test succeeded with ${result}`);
  } catch (error) {
    console.log(`Test failed with ${error}`);
  }
}

testGoogle();
