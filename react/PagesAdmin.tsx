import PropTypes from 'prop-types'
import { mapObjIndexed, values } from 'ramda'
import React, { Component, Fragment } from 'react'
import { injectIntl } from 'react-intl'
import { withRuntimeContext } from 'render'
import { PageHeader, Tab, Tabs } from 'vtex.styleguide'

import NoPagesIcon from './components/icons/NoPagesIcon'
import NoStorefrontIcon from './components/icons/NoStorefrontIcon'
import IncompatibilityCover from './components/IncompatibilityCover'
import IncompatibleMajor from './Incompatible2x'

interface CustomProps {
  params: { field: string }
  runtime: RenderContext
}

type Props = CustomProps & ReactIntl.InjectedIntlProps

interface FieldInfo {
  path: string
  titleId: string
}

interface Fields {
  [field: string]: FieldInfo
}

const fields: Fields = {
  pages: {
    path: 'pages',
    titleId: 'pages.admin.tabs.pages',
  },
  redirects: {
    path: 'redirects',
    titleId: 'pages.admin.tabs.redirects',
  },
  settings: {
    path: 'settings',
    titleId: 'pages.admin.tabs.settings',
  },
}

class PagesAdmin extends Component<Props> {
  public static propTypes = {
    children: PropTypes.object,
    runtime: PropTypes.object,
  }

  public render() {
    const {
      children,
      intl,
      params,
      runtime: { navigate },
    } = this.props
    const path = params.field || ''

    if (path.length === 0) {
      navigate({ to: '/admin/cms/pages' })
    }

    return (
      <IncompatibleMajor>
        {({isMajor2}) => (
          path.startsWith('storefront') ? (
            <Fragment>
              {isMajor2 ?
                <div className={`flex flex-column ${isMajor2 ? 'bg-muted-5 overflow-y-auto vh-100' : ''}`}>
                  <PageHeader title="Storefront" />
                  <div className="relative">
                    <IncompatibilityCover Icon={NoStorefrontIcon} pageName="Storefront" />
                  </div>
                </div>
                : children
              }
            </Fragment>
          ) : (
            <div className={`flex flex-column ${isMajor2 ? 'bg-muted-5 overflow-y-auto vh-100' : ''}`}>
              <PageHeader title="CMS" />
              <div className="relative">
                {isMajor2 && <IncompatibilityCover Icon={NoPagesIcon} pageName="Pages" />}
                <div className="ph7">
                  <Tabs>
                    {values(
                      mapObjIndexed((info: FieldInfo, key: string) => {
                        return (
                          <Tab
                            key={key}
                            label={intl.formatMessage({ id: info.titleId })}
                            active={
                              path.startsWith(info.path) &&
                              (path === '' ? path === info.path : true)
                            }
                            onClick={() => {
                              navigate({ to: '/admin/cms/' + info.path })
                            }}
                          />
                        )
                      }, fields),
                    )}
                  </Tabs>
                </div>
                {children}
              </div>
            </div>
        ))}
      </IncompatibleMajor>
    )
  }
}

export default withRuntimeContext(injectIntl(PagesAdmin))