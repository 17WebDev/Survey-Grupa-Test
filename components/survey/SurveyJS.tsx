import React from 'react';
import Container from 'react-bootstrap/Container';
import * as Survey from 'survey-react';
import * as widgets from 'surveyjs-widgets';
import 'survey-react/survey.css';
import 'inputmask';
import $ from 'jquery';
import 'jquery-ui/themes/base/all.css';
import 'jquery-ui/ui/widgets/datepicker.js';
import 'nouislider/distribute/nouislider.css';
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.min.js';

// Window
(window as any)['$'] = (window as any)['jQuery'] = $;

// Apply SurveyJS theme
Survey.StylesManager.applyTheme('bootstrap');

// Init SurveyJS widgets
widgets.select2(Survey, $);
widgets.inputmask(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey, $);
widgets.select2tagbox(Survey, $);

type Props = {
  json: any;
};

export default function SurveyJS({ json }: Props) {
  /**
   * SurveyJS model.
   */
  const [model, setModel] = React.useState<Survey.SurveyModel | null>(null);

  React.useEffect(() => {
    // Create SurveyJS Model
    const survey = new Survey.Model(json);

    setModel(survey);
  }, []);

  return (
    <React.Fragment>
      {model && (
        <Container>
          <Survey.Survey model={model} />
        </Container>
      )}
    </React.Fragment>
  );
}
