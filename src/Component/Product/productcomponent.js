import data from "./data";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useStateValue } from "../../StateProvider";

export function ProductComp({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = (product) => {
       console.log(product.product.id);
        dispatch({
          type: "Add To Basket",
          item: {
            id: product.product.id,
            title: product.product.title,
            image: product.product.image,
            price: product.product.price,
            rating:product.product.rating,
          }
        });
      };

    return (
        <div className="product-continer">{data.map((product,index)=>
            <Card key={index} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Card.Text>{product.rating}</Card.Text>
                    <Card.Text>{product.button} </Card.Text>
                    <Button onClick ={() => addToBasket({product})}  className="product > button" variant="primary">Add to Basket</Button> 
                </Card.Body>
            </Card>
          )}

        </div>

    ) 
}


