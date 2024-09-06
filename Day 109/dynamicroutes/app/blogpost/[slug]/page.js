export default function Page({ params }) {

    let lang =["python" , "cpp" , "c"]

    if (lang.includes(params.slug)){
      return <div>My Post: {params.slug}</div>
    }
    else {
      return <div>My Post not found</div>
    }
    return <div>My Post: {params.slug}</div>
  }