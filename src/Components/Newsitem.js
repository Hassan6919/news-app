import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


export class Newsitem extends Component {
  render() {
   let {title, description, image, url, author, publishedAt, source} = this.props;
    return (
      <Card className="transparent-card text-white border border-dark card-pop">
    <Card.Img variant="top" src={image ? image : "https://servicepath.co/wp-content/uploads/2019/11/news-1200x565.jpg"} />
    <Stack direction="horizontal" gap={2} style={{ margin: "15px 15px -10px" }}>
        <Badge pill bg="info">
            {source}
        </Badge>
    </Stack>
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Card.Footer style={{ margin: "0px 0px 17px 0px" }}>
            <small className="text-muted">
                <span><b>by</b> {author ? author : "Unknown"}</span>
                <span> <b>Published At</b> {new Date(publishedAt).toGMTString()}</span>
            </small>
        </Card.Footer>
        <Card.Footer>
            <Button variant="dark" href={url} target="_blank">More</Button>
        </Card.Footer>
    </Card.Body>
</Card>
    )
  }
}

export default Newsitem
