import React from "react";
const PrivacyPage = props => {
  console.log(props);

  const CreatePrivacyPolice = props => {
    const text = props.paragraphs;
    const paragraphs = text.map((element, i) => (
      <li className="clear-list-item" key={i}>
        <h6 className="list-heading">{element.heading}</h6>
        <p className="list-paragraph">{element.text}</p>
      </li>
    ));

    return (
      <ul className="pix-black-gray-light big-text pix-margin-bottom-20 clear-list">
        {paragraphs}
      </ul>
    );
  };
  return (
    <main className="blog-page-wrapper">
      <section className="pix_section pix-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-xs-12 col-sm-7 column ui-droppable">
              <div className="pix-content">
                <h1 className="pix-black-gray-dark pix-no-margin-top pix-sm-lineheight">
                  {props.data.heading}
                </h1>
                <h5 className="pix-black-gray-light">{props.data.update}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-5 column ui-droppable col-md-12">
              <div className="pix-content pix-darkblue-transparent pix-radius-3 pix-padding-v-30 pix-margin-v-30 pix-padding-h-20">
                <CreatePrivacyPolice paragraphs={props.data.text} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default PrivacyPage;
