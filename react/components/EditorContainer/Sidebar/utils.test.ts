import { generateWarningMessage, getComponents } from './utils'

const mockExtensions = {
  'store/header': {
    component: 'vtex.LayoutContainer',
  },
  'store/home': {
    component: 'vtex.LayoutContainer',
    props: {
      elements: ['carousel', 'shelf'],
    },
  },
  'store/home/carousel': {
    component: 'vtex.carousel',
  },
  'store/home/no-schema': {
    component: 'vtex.no-schema',
  },
  'store/home/shelf': {
    component: 'vtex.shelf',
  },
  'store/home/shelf/arrow': {
    component: 'vtex.shelf-arrow',
  },
  'store/home/shelf/title': {
    component: 'vtex.shelf-title',
  },
}

const mockComponents = {
  'vtex.carousel': {
    schema: {
      title: 'Carousel',
    },
  },
  'vtex.no-schema': {},
  'vtex.shelf': {
    schema: {
      title: 'Shelf',
    },
  },
  'vtex.shelf-arrow': {
    schema: {
      title: 'Arrow',
    },
  },
  'vtex.shelf-title': {
    schema: {
      title: 'Shelf Title',
    },
  },
}

describe('getComponents', () => {
  it('should filter out components without either a schema or a title', () => {
    expect(
      getComponents(mockExtensions as any, mockComponents as any, 'store/home')
    ).toEqual([
      {
        name: 'Carousel',
        treePath: 'store/home/carousel',
      },
      {
        name: 'Shelf',
        treePath: 'store/home/shelf',
      },
      {
        name: 'Arrow',
        treePath: 'store/home/shelf/arrow',
      },
      {
        name: 'Shelf Title',
        treePath: 'store/home/shelf/title',
      },
    ])
  })

  it('should use elements from props of LayoutContainer to determine order', () => {
    expect(
      getComponents(
        {
          ...mockExtensions,
          'store/home': {
            component: 'vtex.LayoutContainer',
            props: {
              elements: ['shelf', 'carousel'],
            },
          },
        } as any,
        mockComponents as any,
        'store/home'
      )
    ).toEqual([
      {
        name: 'Shelf',
        treePath: 'store/home/shelf',
      },
      {
        name: 'Carousel',
        treePath: 'store/home/carousel',
      },
      {
        name: 'Arrow',
        treePath: 'store/home/shelf/arrow',
      },
      {
        name: 'Shelf Title',
        treePath: 'store/home/shelf/title',
      },
    ])
  })

  it('should get components with getSchema instead of schema', () => {
    const extensions = {
      'store/home/shelf': {
        component: 'vtex.shelf',
      },
    }
    const components = {
      'vtex.shelf': {
        getSchema: () => ({
          title: 'Shelf',
        }),
      },
    }
    expect(
      getComponents(extensions as any, components as any, 'store/home')
    ).toEqual([
      {
        name: 'Shelf',
        treePath: 'store/home/shelf',
      },
    ])
  })

  it('should call console.warn when component has a schema with no title', () => {
    // Setup
    const originalWarn = console.warn
    const mockWarn = jest.fn()
    global.console.warn = mockWarn

    // Test
    const extensions = {
      'store/home/shelf': {
        component: 'vtex.shelf',
      },
    }
    const components = {
      'vtex.shelf': {
        schema: {},
      },
    }
    expect(
      getComponents(extensions as any, components as any, 'store/home')
    ).toEqual([])

    expect(mockWarn).toHaveBeenCalledTimes(1)
    expect(mockWarn).toHaveBeenCalledWith(generateWarningMessage('vtex.shelf'))

    // Restore
    global.console.warn = originalWarn
  })

  it('should call console.warn when component returns a schema from getSchema with no title', () => {
    // Setup
    const originalWarn = console.warn
    const mockWarn = jest.fn()
    global.console.warn = mockWarn

    // Test
    const extensions = {
      'store/home/shelf': {
        component: 'vtex.shelf',
      },
    }
    const components = {
      'vtex.shelf': {
        getSchema: () => ({}),
      },
    }
    expect(
      getComponents(extensions as any, components as any, 'store/home')
    ).toEqual([])

    expect(mockWarn).toHaveBeenCalledTimes(1)
    expect(mockWarn).toHaveBeenCalledWith(generateWarningMessage('vtex.shelf'))

    // Restore
    global.console.warn = originalWarn
  })
})
