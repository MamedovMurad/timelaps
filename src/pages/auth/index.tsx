
import bgImage from '../../assets/images/bg.png' // Adjust path based on your setup
import { AuthForm } from './_components/form'

type Props = {}

export default function AuthPage({}: Props) {
  return (
<main style={{ backgroundImage: `url(${bgImage})`}} className=' bg-center bg-no-repeat h-screen bg-cover flex flex-col justify-center '>
  <AuthForm/>
</main>

  )
}