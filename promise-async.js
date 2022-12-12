const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getCookies() {
  let name = [];
  cookies.forEach((e) => {
    name.push(e.name);
  });

  // Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(() => {
    document.body.innerHTML = name;
  }, 1000);
}

//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookie() {
  return new Promise((resolve, reject) => {
    // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
    setTimeout(() => {
      // Progression 5: handling errors and adding new cookie to the list
      cookies.push(newCookie);
      let err = false;

      if (!err) {
        resolve();
      } else {
        reject('No cookie found');
      }
    }, 2000);
  });
}
// Progression 7: creating a new async function
async function callingCookies() {
  await createCookie();
  getCookies();
}

// calling the new async function
callingCookies();
