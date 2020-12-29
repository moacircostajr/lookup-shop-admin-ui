import React from 'react'
import '../../App.css'
import SimpleMap from '../components/SimpleMap'
import TabelaEmpresas from '../components/TabelaEmpresas'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    margem: {
    	margin: 'auto',
    }
  }),
);

export default function Empresas() {

	const classes = useStyles();

	return (
	<div className={classes.margem}>
		<Grid container spacing={1}>
			<Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
				<TabelaEmpresas />
			</Grid>
			<Grid item>
				<SimpleMap />
			</Grid>
		</Grid>
	</div>
	)
}
