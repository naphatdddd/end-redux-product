import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { Grid, Paper, Typography, ButtonGroup, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import * as actions from '../actions'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  content: {
    height: '100%',
  },
  amountContainer: {
    marginBottom: theme.spacing(2),
  },
  amount: {
    padding: theme.spacing(0, 2),
  },
}))
function ProductDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const classes = useStyles()
  const history = useHistory()
  const theme = useTheme()
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'))
  const [product] = useSelector((state) => state.products.items)

  useEffect(() => {
    const action = actions.loadProduct(id)
    dispatch(action)
  }, [dispatch, id])

  const byeNow = () => history.push('/cart')
  if (!product) return null
  return (
    <Paper className={classes.root}>
      <Grid
        container
        spacing={2}
        justify={isMediumUp ? 'flex-start' : 'center'}
      >
        <Grid item>
          <img src={product.image} alt={product.name} />
        </Grid>
        <Grid item>
          <Grid
            container
            className={classes.content}
            direction="column"
            justify="space-between"
          >
            <Grid item>
              <Typography variant="h4" component="h1">
                {product.name}
              </Typography>
              <p>{product.desc}</p>
            </Grid>
            <Grid item>
              <ButtonGroup
                variant="contained"
                color="primary"
                arial-label="primary button group"
              >
                <Button onClick={byeNow}>Bye Now</Button>
                <Button>Add To Cart</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProductDetails
