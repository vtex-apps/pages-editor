import React from 'react'
import { Dropdown } from 'vtex.styleguide'
import { ConditionalTemplatePicker } from './ConditionalTemplatePicker'
import SectionTitle from './SectionTitle'
import { PageWithUniqueId } from './typings'

interface ConditionalTemplateSectionProps {
  conditions: Condition[]
  detailChangeHandlerGetter: (
    detailName: keyof Route,
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void
  formErrors: Partial<{ [key in keyof Route]: string }>
  onAddConditionalTemplate: () => void
  onChangeConditionsConditionalTemplate: (
    uniqueId: number,
    conditions: SelectOption[],
  ) => void
  onChangeTemplateConditionalTemplate: (
    uniqueId: number,
    template: string,
  ) => void
  onRemoveConditionalTemplate: (uniqueId: number) => void
  pages: PageWithUniqueId[]
  template: string
  templates: Template[]
}

type Props = ConditionalTemplateSectionProps & ReactIntl.InjectedIntlProps

export const ConditionalTemplateSection: React.SFC<Props> = ({
  conditions,
  detailChangeHandlerGetter,
  formErrors,
  intl,
  onAddConditionalTemplate,
  onChangeConditionsConditionalTemplate,
  onChangeTemplateConditionalTemplate,
  onRemoveConditionalTemplate,
  pages,
  template,
  templates,
}) => (
  <React.Fragment>
    <SectionTitle textId="pages.admin.pages.form.templates.title" />
    <Dropdown
      label={intl.formatMessage({
        id: 'pages.admin.pages.form.templates.field.default',
      })}
      options={templates.map(({ id }) => ({ value: id, label: id }))}
      onChange={detailChangeHandlerGetter('template')}
      value={template}
      errorMessage={
        formErrors.template && intl.formatMessage({ id: formErrors.template })
      }
    />
    <h2 className="mt7 f5 normal">
      {intl.formatMessage({
        id: 'pages.admin.pages.form.templates.conditional.title',
      })}
    </h2>
    <p className="f6 c-muted-2">
      {intl.formatMessage({
        id: 'pages.admin.pages.form.templates.conditional.description',
      })}
    </p>
    {pages.map(page => (
      <ConditionalTemplatePicker
        key={page.uniqueId}
        availableConditions={conditions}
        conditions={page.conditions}
        intl={intl}
        onChangeConditionsConditionalTemplate={
          onChangeConditionsConditionalTemplate
        }
        onChangeTemplateConditionalTemplate={
          onChangeTemplateConditionalTemplate
        }
        onRemoveConditionalTemplate={onRemoveConditionalTemplate}
        pageId={page.uniqueId}
        template={page.template}
        templates={templates}
        formErrors={formErrors}
      />
    ))}
    <button
      type="button"
      className="bg-transparent bn mt4 pl0 pointer"
      onClick={onAddConditionalTemplate}
    >
      <span className="c-action-primary f4 mr2 v-mid">+</span>{' '}
      <span className="f6 v-mid">
        {intl.formatMessage({
          id: 'pages.admin.pages.form.templates.conditional.addButton',
        })}
      </span>
    </button>
  </React.Fragment>
)

export default ConditionalTemplateSection
