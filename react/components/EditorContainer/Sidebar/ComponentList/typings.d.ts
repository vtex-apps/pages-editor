import { SidebarComponent } from '../typings'

export interface NormalizedComponent extends SidebarComponent {
  components?: NormalizedComponent[]
  isSortable: boolean
}

export interface NormalizedRelativeRoot {
  after: NormalizedComponent[]
  around: NormalizedComponent[]
  before: NormalizedComponent[]
  nestedAround: NormalizedComponent[]
}

export interface ReorderChange {
  target: string
  order: string[]
}
