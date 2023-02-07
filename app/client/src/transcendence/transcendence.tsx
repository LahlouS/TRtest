import '../App.css';
import { Typography } from '@mui/material'

/**
 * ============ Entrypoint of the project =============
 */

export const Transcendence = () => {
	return (
		<>
			<Typography variant="h1" align="center" padding="20px">
					Transcendence
			</Typography>
			<Typography variant="h4" align="center" padding="20px">
					Welcome to your first own full stack project ...
			</Typography>
			<Typography variant="h6" align="justify" padding="50px">
					Yours local volumes for client ( react == localhost:3000 ) are "./app/client/src" and ./app/client/public"	:
					<br/>
					-	you can work on directory "./app/client/src/transcendence"
					<br/>
					-	the front-end entrypoint is "./app/client/src/transcendence/transcendence.tsx"
			</Typography>
			<Typography variant="h6" align="justify" padding="50px">
					Your local volume for server ( nestjs == localhost:5500 ) is "./app/server/src"	:
					<br/>
					-	you can work on directory "./app/server/src"
			</Typography>
			<Typography variant="h6" align="justify" padding="50px">
					Your local volume for postgres database is handle by docker and persitent (like all others volumes)	:
					<br/>
					-	The database is already connected to nestjs server ( view file "/app/server/src/app.module.ts")
					<br/>
					-	You can remove persitent postgres data volume with command: "docker volume rm postgres"
			</Typography>
		</>
	)
}
