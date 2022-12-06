import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  repository,
  repositorylink,
  livedemolink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <></>
            <a
              href={repositorylink}
              className="btn btn-primary"
              target="_blank"
            >
              {repository}
            </a>

            <a
              href={livedemolink}
              className="btn btn-primary projectCardATagMargin"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
