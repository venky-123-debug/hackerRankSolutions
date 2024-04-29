async function getNumTransactions(username) {
  // write your code here
  try {
    // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
    // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>
    const userData = await axios.get(
      `https://jsonmock.hackerrank.com/api/article_users?username=${username}`
    );
    // console.log(userData.data)
    let userId = userData.data.data[0].id;
    // console.log({userId})
    if (!userData.data.data.length) throw "Username Not Found";

    const idData = await axios.get(
      `https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`
    );
    let userIdData = idData.data;
    //  console.log({ userIdData })

    let totalPage = userIdData.total;
    console.log(totalPage);
  } catch (e) {
    console.error(e);
  }
}

getNumTransactions("epaga")