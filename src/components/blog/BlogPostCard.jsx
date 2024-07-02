import { Button, Image, Link } from "@nextui-org/react";
import { FiArrowRight } from "react-icons/fi";

function BlogPostCard() {
  return (
    <div className="space-y-4">
    <Image
      src="https://i.ibb.co/cFL8BQ4/NEW-700x430-UOD-480x304.jpg"
      alt="Blog Post 1"
      width={400}
      height={200}
      className="rounded-lg object-cover w-full"
    />
    <div className="space-y-2">
      <h3 className="text-xl font-bold">Blog Post 1</h3>
      <p className="text-muted-foreground line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at augue egestas, scelerisque enim nec,
        aliquam libero.
      </p>
      <Button
        as={Link}
        href="/blog/1"
        color="primary"
        size="sm"
        radius="sm"
        endContent={<FiArrowRight className="h-4 w-4" />}
      >
        Read More
      </Button>
    </div>
  </div>
  )
}

export default BlogPostCard