import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>
          About This Project
        </h1>
        <p>
          This is a React app to leave feedback for a service or a product 
        </p>
        <p>
          Version 1.0.0
        </p>
        <p>
          <a href="/">Back to home</a>
        </p>
      </div>

    </Card>
  )
}

export default AboutPage