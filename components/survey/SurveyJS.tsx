import React from 'react';
import * as Survey from 'survey-react';
import * as widgets from 'surveyjs-widgets';
import 'inputmask';
import $ from 'jquery';
import 'jquery-ui/themes/base/all.css';
import 'jquery-ui/ui/widgets/datepicker.js';
import 'nouislider/distribute/nouislider.css';
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.min.js';

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

const css = {
  root: 'sv_main sv_bootstrap_css',
  checkbox: {
    item: 'checkbox',
    itemChecked: 'checked',
    itemControl: 'form-check-input',
    label: 'form-check',
    controlLabel: 'form-check-label',
    column: 'col',
  },
  radiogroup: {
    label: 'form-check',
    controlLabel: 'form-check-label',
    itemControl: 'form-check-input',
  },
  navigation: {
    complete: 'btn btn-primary',
    prev: 'btn btn-outline-primary mr-2',
    next: 'btn btn-primary',
  },
  matrixdynamic: {
    buttonAdd: 'btn btn-primary mr-2 mt-4',
    buttonRemove: 'btn btn-danger ml-2',
    headerCell: 'mr-2 ml-2',
  },
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
        <div className="mb-4">
          <Survey.Survey css={css} model={model} />
        </div>
      )}
    </React.Fragment>
  );
}
