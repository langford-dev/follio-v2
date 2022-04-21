import Button from "../components/ui/button"
import { useContext } from "react"
import { useSession, signIn, signOut } from 'next-auth/react'
import { FollioContext } from "../context/follioContext"
import { useRouter } from "next/dist/client/router"

const Auth = () => {
    const { authenticateUser } = useContext(FollioContext)
    const { data: session } = useSession()
    const router = useRouter()
    return <div>
        <Button label="Continue with Google" action={authenticateUser} />
    </div>
}

export default Auth