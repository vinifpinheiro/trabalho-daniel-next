import { GetServerSideProps } from 'next'

export const FuncServer: GetServerSideProps = async () => {
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()

  return {
    props: {
      data: json
    }
  }
}