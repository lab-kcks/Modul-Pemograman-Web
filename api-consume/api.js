import axios from 'axios'

const baseUrl = "http://localhost:3000/api"


const createPost = async () => {
  try {
    const newPost = {
      title: "testtitlbjhhhe",
      writer: "652a1329f724465b58dd88c0",
      content: "content ttesting"
    }
    const result = await axios.post(baseUrl + "/blog", newPost)
    console.log(result.data)
  } catch (err) {
    console.error(err)
  }
}

const getPost = async () => {
    try {
    const result = await axios.get(baseUrl + "/blog")
    console.log(result.data)
  } catch (err) {
    console.error(err)
  }

}

const main = async () => {
  // await getPost()
  await createPost()
}

main()
