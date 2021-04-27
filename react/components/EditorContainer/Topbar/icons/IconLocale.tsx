import React from 'react'

interface Props {
  color?: string
}

const IconLocale: React.FC<Props> = ({ color = 'currentColor' }) => (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="path-1-outside-1"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="22"
      height="20"
      fill="black"
    >
      <rect fill="white" width="22" height="20" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.82609 4.97516C9.69565 2.61491 11.9317 1 14.6646 1C18.1429 1 20.8758 3.73292 21 6.83851C21 7.3354 20.8758 8.08075 20.5031 8.82609C20.3288 9.26184 20.0322 9.75874 19.6991 10.3168C19.5575 10.5542 19.4092 10.8026 19.2609 11.0621C18.2671 12.677 17.0248 14.1677 16.1553 15.1615C15.7826 15.5342 15.2857 15.7826 14.7888 15.7826C14.2919 15.7826 13.795 15.5342 13.4224 15.1615C13.0497 14.7888 12.677 14.4161 12.3043 13.9193C12.1801 14.1056 12.087 14.2609 11.9938 14.4161C11.9006 14.5714 11.8075 14.7267 11.6832 14.913C10.6894 16.528 9.44721 18.0186 8.57764 19.0124C8.20497 19.3851 7.70807 19.6335 7.21118 19.6335C6.71429 19.6335 6.21739 19.3851 5.84472 19.0124C4.97516 18.0186 3.73292 16.4037 2.73913 14.913C2.59084 14.6535 2.44255 14.4051 2.30086 14.1677C1.96778 13.6097 1.6712 13.1128 1.49689 12.677C1.12422 11.9317 1 11.1863 1 10.6894C1 7.45963 3.73292 4.72671 7.21118 4.72671C7.8323 4.72671 8.32919 4.85093 8.82609 4.97516ZM7.70807 18.2671C8.57764 17.2733 9.69565 15.7826 10.6894 14.2919C11.1863 13.5466 11.559 12.8012 11.8075 12.1801C12.0559 11.4348 12.1801 10.9379 12.1801 10.6894C12.1801 8.08075 9.9441 5.96894 7.21118 5.96894C4.47826 5.96894 2.24224 8.08075 2.24224 10.6894C2.24224 10.9379 2.36646 11.4348 2.73913 12.1801C2.98758 12.8012 3.36025 13.5466 3.85714 14.2919C4.72671 15.7826 5.96894 17.2733 6.83851 18.2671C7.08696 18.5155 7.45963 18.5155 7.70807 18.2671ZM18.3292 10.2401C18.734 9.53519 19.0445 8.9943 19.2609 8.45342C19.5093 7.70807 19.6335 7.21118 19.6335 6.96273C19.6335 4.35404 17.3975 2.24224 14.6646 2.24224C12.5528 2.24224 10.6894 3.6087 9.9441 5.59627C10.8137 5.96894 11.559 6.59006 12.1801 7.3354C12.1801 5.96894 13.2981 4.85093 14.6646 4.85093C16.0311 4.85093 17.1491 5.96894 17.1491 7.3354C17.1491 8.70186 16.0311 9.81988 14.6646 9.81988C14.0435 9.81988 13.5466 9.57143 13.1739 9.32298C13.2981 9.81988 13.4224 10.3168 13.4224 10.8137C13.4224 11.3106 13.2981 12.0559 12.9255 12.8012V12.9255C13.1584 13.2167 13.3914 13.4806 13.6116 13.73C13.861 14.0125 14.094 14.2765 14.2919 14.5404C14.5404 14.7888 14.913 14.7888 15.1615 14.5404C16.0311 13.5466 17.1491 12.0559 18.1429 10.5652C18.207 10.4529 18.2692 10.3447 18.3292 10.2401ZM14.6646 5.96894C13.9193 5.96894 13.4224 6.46584 13.4224 7.21118C13.4224 7.95652 13.9193 8.45342 14.6646 8.45342C15.4099 8.45342 15.9068 7.95652 15.9068 7.21118C15.9068 6.46584 15.4099 5.96894 14.6646 5.96894ZM4.72667 10.9379C4.72667 9.57142 5.84468 8.45341 7.21114 8.45341C8.5776 8.45341 9.69561 9.57142 9.69561 10.9379C9.69561 12.3043 8.5776 13.4224 7.21114 13.4224C5.84468 13.4224 4.72667 12.3043 4.72667 10.9379ZM5.96891 10.9379C5.96891 11.6832 6.4658 12.1801 7.21114 12.1801C7.95648 12.1801 8.45338 11.6832 8.45338 10.9379C8.45338 10.1925 7.95648 9.69565 7.21114 9.69565C6.4658 9.69565 5.96891 10.1925 5.96891 10.9379Z"
      />
    </mask>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.82609 4.97516C9.69565 2.61491 11.9317 1 14.6646 1C18.1429 1 20.8758 3.73292 21 6.83851C21 7.3354 20.8758 8.08075 20.5031 8.82609C20.3288 9.26184 20.0322 9.75874 19.6991 10.3168C19.5575 10.5542 19.4092 10.8026 19.2609 11.0621C18.2671 12.677 17.0248 14.1677 16.1553 15.1615C15.7826 15.5342 15.2857 15.7826 14.7888 15.7826C14.2919 15.7826 13.795 15.5342 13.4224 15.1615C13.0497 14.7888 12.677 14.4161 12.3043 13.9193C12.1801 14.1056 12.087 14.2609 11.9938 14.4161C11.9006 14.5714 11.8075 14.7267 11.6832 14.913C10.6894 16.528 9.44721 18.0186 8.57764 19.0124C8.20497 19.3851 7.70807 19.6335 7.21118 19.6335C6.71429 19.6335 6.21739 19.3851 5.84472 19.0124C4.97516 18.0186 3.73292 16.4037 2.73913 14.913C2.59084 14.6535 2.44255 14.4051 2.30086 14.1677C1.96778 13.6097 1.6712 13.1128 1.49689 12.677C1.12422 11.9317 1 11.1863 1 10.6894C1 7.45963 3.73292 4.72671 7.21118 4.72671C7.8323 4.72671 8.32919 4.85093 8.82609 4.97516ZM7.70807 18.2671C8.57764 17.2733 9.69565 15.7826 10.6894 14.2919C11.1863 13.5466 11.559 12.8012 11.8075 12.1801C12.0559 11.4348 12.1801 10.9379 12.1801 10.6894C12.1801 8.08075 9.9441 5.96894 7.21118 5.96894C4.47826 5.96894 2.24224 8.08075 2.24224 10.6894C2.24224 10.9379 2.36646 11.4348 2.73913 12.1801C2.98758 12.8012 3.36025 13.5466 3.85714 14.2919C4.72671 15.7826 5.96894 17.2733 6.83851 18.2671C7.08696 18.5155 7.45963 18.5155 7.70807 18.2671ZM18.3292 10.2401C18.734 9.53519 19.0445 8.9943 19.2609 8.45342C19.5093 7.70807 19.6335 7.21118 19.6335 6.96273C19.6335 4.35404 17.3975 2.24224 14.6646 2.24224C12.5528 2.24224 10.6894 3.6087 9.9441 5.59627C10.8137 5.96894 11.559 6.59006 12.1801 7.3354C12.1801 5.96894 13.2981 4.85093 14.6646 4.85093C16.0311 4.85093 17.1491 5.96894 17.1491 7.3354C17.1491 8.70186 16.0311 9.81988 14.6646 9.81988C14.0435 9.81988 13.5466 9.57143 13.1739 9.32298C13.2981 9.81988 13.4224 10.3168 13.4224 10.8137C13.4224 11.3106 13.2981 12.0559 12.9255 12.8012V12.9255C13.1584 13.2167 13.3914 13.4806 13.6116 13.73C13.861 14.0125 14.094 14.2765 14.2919 14.5404C14.5404 14.7888 14.913 14.7888 15.1615 14.5404C16.0311 13.5466 17.1491 12.0559 18.1429 10.5652C18.207 10.4529 18.2692 10.3447 18.3292 10.2401ZM14.6646 5.96894C13.9193 5.96894 13.4224 6.46584 13.4224 7.21118C13.4224 7.95652 13.9193 8.45342 14.6646 8.45342C15.4099 8.45342 15.9068 7.95652 15.9068 7.21118C15.9068 6.46584 15.4099 5.96894 14.6646 5.96894ZM4.72667 10.9379C4.72667 9.57142 5.84468 8.45341 7.21114 8.45341C8.5776 8.45341 9.69561 9.57142 9.69561 10.9379C9.69561 12.3043 8.5776 13.4224 7.21114 13.4224C5.84468 13.4224 4.72667 12.3043 4.72667 10.9379ZM5.96891 10.9379C5.96891 11.6832 6.4658 12.1801 7.21114 12.1801C7.95648 12.1801 8.45338 11.6832 8.45338 10.9379C8.45338 10.1925 7.95648 9.69565 7.21114 9.69565C6.4658 9.69565 5.96891 10.1925 5.96891 10.9379Z"
      fill={color}
    />
    <path
      d="M8.82609 4.97516L8.80183 5.07217L8.8889 5.09394L8.91992 5.00973L8.82609 4.97516ZM21 6.83851H21.1001L21.0999 6.83451L21 6.83851ZM20.5031 8.82609L20.4134 8.78121L20.4103 8.78895L20.5031 8.82609ZM19.6991 10.3168L19.6133 10.2655L19.6991 10.3168ZM19.2609 11.0621L19.3461 11.1145L19.3477 11.1117L19.2609 11.0621ZM16.1553 15.1615L16.2261 15.2324L16.2305 15.2273L16.1553 15.1615ZM12.3043 13.9193L12.3843 13.8593L12.2995 13.7462L12.2211 13.8638L12.3043 13.9193ZM11.9938 14.4161L12.0795 14.4676V14.4676L11.9938 14.4161ZM11.6832 14.913L11.6 14.8575L11.5981 14.8606L11.6832 14.913ZM8.57764 19.0124L8.64851 19.0833L8.6529 19.0783L8.57764 19.0124ZM5.84472 19.0124L5.7693 19.0784L5.77401 19.0831L5.84472 19.0124ZM2.73913 14.913L2.6521 14.9628L2.65593 14.9685L2.73913 14.913ZM2.30086 14.1677L2.21499 14.219H2.21499L2.30086 14.1677ZM1.49689 12.677L1.59006 12.6398L1.58634 12.6323L1.49689 12.677ZM10.6894 14.2919L10.7726 14.3474L10.6894 14.2919ZM7.70807 18.2671L7.77894 18.3379L7.78333 18.3329L7.70807 18.2671ZM11.8075 12.1801L11.9005 12.2173L11.9023 12.2117L11.8075 12.1801ZM2.73913 12.1801L2.8323 12.1429L2.82857 12.1354L2.73913 12.1801ZM3.85714 14.2919L3.94368 14.2414L3.94035 14.2365L3.85714 14.2919ZM6.83851 18.2671L6.76308 18.3331L6.7678 18.3378L6.83851 18.2671ZM19.2609 8.45342L19.3539 8.49062L19.3557 8.48504L19.2609 8.45342ZM18.3292 10.2401L18.4159 10.2899V10.2899L18.3292 10.2401ZM9.9441 5.59627L9.85047 5.56116L9.81694 5.65057L9.90471 5.68819L9.9441 5.59627ZM12.1801 7.3354L12.1033 7.39942L12.2801 7.61161V7.3354H12.1801ZM13.1739 9.32298L13.2294 9.23978L13.0142 9.0963L13.0769 9.34723L13.1739 9.32298ZM12.9255 12.8012L12.836 12.7565L12.8255 12.7776V12.8012H12.9255ZM12.9255 12.9255H12.8255V12.9605L12.8474 12.9879L12.9255 12.9255ZM13.6116 13.73L13.6866 13.6638L13.6116 13.73ZM14.2919 14.5404L14.2119 14.6004L14.2162 14.6061L14.2212 14.6111L14.2919 14.5404ZM15.1615 14.5404L15.2324 14.6112L15.2367 14.6062L15.1615 14.5404ZM18.1429 10.5652L18.2263 10.6208L18.2297 10.6148L18.1429 10.5652ZM14.6646 0.9C11.8903 0.9 9.61649 2.54051 8.73225 4.94058L8.91992 5.00973C9.77481 2.6893 11.973 1.1 14.6646 1.1V0.9ZM21.0999 6.83451C20.9735 3.67379 18.195 0.9 14.6646 0.9V1.1C18.0907 1.1 20.7781 3.79205 20.9001 6.84251L21.0999 6.83451ZM20.5926 8.87081C20.9727 8.11058 21.1 7.34976 21.1 6.83851H20.9C20.9 7.32104 20.7789 8.05091 20.4137 8.78137L20.5926 8.87081ZM19.785 10.368C20.1167 9.81236 20.4181 9.30793 20.596 8.86323L20.4103 8.78895C20.2395 9.21575 19.9478 9.70511 19.6133 10.2655L19.785 10.368ZM19.3477 11.1117C19.4954 10.8532 19.6433 10.6055 19.785 10.368L19.6133 10.2655C19.4717 10.5028 19.3229 10.752 19.174 11.0125L19.3477 11.1117ZM16.2305 15.2273C17.1012 14.2324 18.3478 12.7367 19.346 11.1145L19.1757 11.0097C18.1864 12.6174 16.9485 14.103 16.08 15.0956L16.2305 15.2273ZM14.7888 15.8826C15.3182 15.8826 15.8393 15.6189 16.226 15.2322L16.0846 15.0908C15.7259 15.4494 15.2532 15.6826 14.7888 15.6826V15.8826ZM13.3516 15.2322C13.7384 15.6189 14.2594 15.8826 14.7888 15.8826V15.6826C14.3244 15.6826 13.8517 15.4494 13.4931 15.0908L13.3516 15.2322ZM12.2243 13.9793C12.6018 14.4825 12.9792 14.8597 13.3516 15.2322L13.4931 15.0908C13.1202 14.7179 12.7522 14.3498 12.3843 13.8593L12.2243 13.9793ZM12.0795 14.4676C12.1727 14.3123 12.2648 14.1589 12.3876 13.9747L12.2211 13.8638C12.0955 14.0523 12.0012 14.2094 11.908 14.3647L12.0795 14.4676ZM11.7664 14.9685C11.8921 14.78 11.9864 14.6229 12.0795 14.4676L11.908 14.3647C11.8149 14.52 11.7228 14.6734 11.6 14.8576L11.7664 14.9685ZM8.6529 19.0783C9.52351 18.0833 10.7702 16.5876 11.7684 14.9655L11.5981 14.8606C10.6087 16.4683 9.3709 17.954 8.50238 18.9466L8.6529 19.0783ZM7.21118 19.7335C7.7406 19.7335 8.26165 19.4698 8.64835 19.0831L8.50693 18.9417C8.14829 19.3003 7.67555 19.5335 7.21118 19.5335V19.7335ZM5.77401 19.0831C6.16072 19.4698 6.68176 19.7335 7.21118 19.7335V19.5335C6.74681 19.5335 6.27407 19.3003 5.91543 18.9417L5.77401 19.0831ZM2.65593 14.9685C3.65191 16.4625 4.89677 18.0809 5.76946 19.0783L5.91998 18.9466C5.05354 17.9564 3.81393 16.345 2.82234 14.8576L2.65593 14.9685ZM2.21499 14.219C2.35674 14.4564 2.50456 14.7041 2.65231 14.9627L2.82595 14.8634C2.67712 14.603 2.52835 14.3537 2.38673 14.1165L2.21499 14.219ZM1.40405 12.7142C1.58193 13.1589 1.88333 13.6633 2.21499 14.219L2.38673 14.1165C2.05223 13.556 1.76047 13.0667 1.58974 12.6399L1.40405 12.7142ZM0.9 10.6894C0.9 11.2007 1.02734 11.9615 1.40745 12.7217L1.58634 12.6323C1.22111 11.9018 1.1 11.172 1.1 10.6894H0.9ZM7.21118 4.62671C3.68037 4.62671 0.9 7.40176 0.9 10.6894H1.1C1.1 7.51749 3.78547 4.82671 7.21118 4.82671V4.62671ZM8.85034 4.87814C8.35375 4.75399 7.846 4.62671 7.21118 4.62671V4.82671C7.8186 4.82671 8.30463 4.94787 8.80183 5.07217L8.85034 4.87814ZM10.6062 14.2365C9.61408 15.7247 8.4987 17.2116 7.63282 18.2012L7.78333 18.3329C8.65658 17.3349 9.77723 15.8405 10.7726 14.3474L10.6062 14.2365ZM11.7146 12.143C11.4686 12.7581 11.099 13.4972 10.6062 14.2365L10.7726 14.3474C11.2736 13.5959 11.6495 12.8444 11.9003 12.2173L11.7146 12.143ZM12.0801 10.6894C12.0801 10.8008 12.0517 10.9772 11.9899 11.2242C11.9287 11.4692 11.8364 11.7771 11.7126 12.1485L11.9023 12.2117C12.027 11.8378 12.121 11.5246 12.184 11.2727C12.2464 11.0228 12.2801 10.8266 12.2801 10.6894H12.0801ZM7.21118 6.06894C9.89394 6.06894 12.0801 8.14091 12.0801 10.6894H12.2801C12.2801 8.02058 9.99426 5.86894 7.21118 5.86894V6.06894ZM2.34224 10.6894C2.34224 8.14091 4.52842 6.06894 7.21118 6.06894V5.86894C4.4281 5.86894 2.14224 8.02058 2.14224 10.6894H2.34224ZM2.82857 12.1354C2.45784 11.3939 2.34224 10.9141 2.34224 10.6894H2.14224C2.14224 10.9617 2.27508 11.4756 2.64969 12.2248L2.82857 12.1354ZM3.94035 14.2365C3.44754 13.4972 3.07802 12.7581 2.83198 12.143L2.64628 12.2173C2.89713 12.8444 3.27296 13.5959 3.77394 14.3474L3.94035 14.2365ZM6.91377 18.2012C6.04481 17.2081 4.80797 15.7235 3.94352 14.2415L3.77077 14.3423C4.64544 15.8418 5.89308 17.3384 6.76325 18.3329L6.91377 18.2012ZM7.63736 18.1964C7.42797 18.4058 7.11861 18.4058 6.90922 18.1964L6.7678 18.3378C7.0553 18.6253 7.49128 18.6253 7.77878 18.3378L7.63736 18.1964ZM19.168 8.41628C18.9548 8.94929 18.6483 9.48363 18.2425 10.1904L18.4159 10.2899C18.8197 9.58675 19.1342 9.03932 19.3537 8.49055L19.168 8.41628ZM19.5335 6.96273C19.5335 7.07404 19.5051 7.25045 19.4434 7.49749C19.3821 7.74251 19.2898 8.05042 19.166 8.42179L19.3557 8.48504C19.4804 8.11107 19.5744 7.79786 19.6374 7.54599C19.6999 7.29613 19.7335 7.09987 19.7335 6.96273H19.5335ZM14.6646 2.34224C17.3474 2.34224 19.5335 4.4142 19.5335 6.96273H19.7335C19.7335 4.29387 17.4477 2.14224 14.6646 2.14224V2.34224ZM10.0377 5.63139C10.7694 3.68038 12.597 2.34224 14.6646 2.34224V2.14224C12.5085 2.14224 10.6095 3.53701 9.85047 5.56116L10.0377 5.63139ZM12.2569 7.27139C11.6284 6.51718 10.871 5.88472 9.98349 5.50436L9.90471 5.68819C10.7563 6.05316 11.4896 6.66294 12.1033 7.39942L12.2569 7.27139ZM14.6646 4.75093C13.2429 4.75093 12.0801 5.91372 12.0801 7.3354H12.2801C12.2801 6.02417 13.3534 4.95093 14.6646 4.95093V4.75093ZM17.2491 7.3354C17.2491 5.91372 16.0863 4.75093 14.6646 4.75093V4.95093C15.9758 4.95093 17.0491 6.02417 17.0491 7.3354H17.2491ZM14.6646 9.91988C16.0863 9.91988 17.2491 8.75709 17.2491 7.3354H17.0491C17.0491 8.64664 15.9758 9.71988 14.6646 9.71988V9.91988ZM13.1184 9.40619C13.4992 9.66005 14.0157 9.91988 14.6646 9.91988V9.71988C14.0713 9.71988 13.5939 9.48281 13.2294 9.23978L13.1184 9.40619ZM13.5224 10.8137C13.5224 10.3023 13.3946 9.79328 13.2709 9.29873L13.0769 9.34723C13.2017 9.84647 13.3224 10.3312 13.3224 10.8137H13.5224ZM13.0149 12.846C13.395 12.0857 13.5224 11.3249 13.5224 10.8137H13.3224C13.3224 11.2962 13.2012 12.0261 12.836 12.7565L13.0149 12.846ZM13.0255 12.9255V12.8012H12.8255V12.9255H13.0255ZM13.6866 13.6638C13.4662 13.4142 13.2348 13.1521 13.0036 12.863L12.8474 12.9879C13.0821 13.2813 13.3166 13.547 13.5366 13.7962L13.6866 13.6638ZM14.3719 14.4804C14.1711 14.2127 13.9354 13.9457 13.6866 13.6638L13.5366 13.7962C13.7867 14.0794 14.0168 14.3402 14.2119 14.6004L14.3719 14.4804ZM15.0908 14.4697C14.8814 14.6791 14.572 14.6791 14.3626 14.4697L14.2212 14.6111C14.5087 14.8986 14.9447 14.8986 15.2322 14.6111L15.0908 14.4697ZM18.0597 10.5097C17.0675 11.998 15.9521 13.4849 15.0862 14.4745L15.2367 14.6062C16.11 13.6082 17.2306 12.1138 18.2261 10.6207L18.0597 10.5097ZM18.2425 10.1904C18.1824 10.2949 18.1203 10.4032 18.056 10.5156L18.2297 10.6148C18.2938 10.5026 18.3559 10.3945 18.4159 10.2899L18.2425 10.1904ZM13.5224 7.21118C13.5224 6.86123 13.6386 6.57738 13.8347 6.38127C14.0308 6.18516 14.3147 6.06894 14.6646 6.06894V5.86894C14.2692 5.86894 13.9319 6.00118 13.6933 6.23985C13.4546 6.47852 13.3224 6.81578 13.3224 7.21118H13.5224ZM14.6646 8.35342C14.3147 8.35342 14.0308 8.2372 13.8347 8.04109C13.6386 7.84498 13.5224 7.56113 13.5224 7.21118H13.3224C13.3224 7.60658 13.4546 7.94384 13.6933 8.18251C13.9319 8.42118 14.2692 8.55342 14.6646 8.55342V8.35342ZM15.8068 7.21118C15.8068 7.56113 15.6906 7.84498 15.4945 8.04109C15.2984 8.2372 15.0145 8.35342 14.6646 8.35342V8.55342C15.06 8.55342 15.3973 8.42118 15.6359 8.18251C15.8746 7.94384 16.0068 7.60658 16.0068 7.21118H15.8068ZM14.6646 6.06894C15.0145 6.06894 15.2984 6.18516 15.4945 6.38127C15.6906 6.57738 15.8068 6.86123 15.8068 7.21118H16.0068C16.0068 6.81578 15.8746 6.47852 15.6359 6.23985C15.3973 6.00118 15.06 5.86894 14.6646 5.86894V6.06894ZM7.21114 8.35341C5.78945 8.35341 4.62667 9.51619 4.62667 10.9379H4.82667C4.82667 9.62665 5.89991 8.55341 7.21114 8.55341V8.35341ZM9.79562 10.9379C9.79562 9.51619 8.63283 8.35341 7.21114 8.35341V8.55341C8.52237 8.55341 9.59561 9.62665 9.59561 10.9379H9.79562ZM7.21114 13.5224C8.63283 13.5224 9.79562 12.3596 9.79562 10.9379H9.59561C9.59561 12.2491 8.52237 13.3224 7.21114 13.3224V13.5224ZM4.62667 10.9379C4.62667 12.3596 5.78945 13.5224 7.21114 13.5224V13.3224C5.89991 13.3224 4.82667 12.2491 4.82667 10.9379H4.62667ZM7.21114 12.0801C6.8612 12.0801 6.57735 11.9639 6.38123 11.7678C6.18512 11.5717 6.06891 11.2878 6.06891 10.9379H5.86891C5.86891 11.3333 6.00114 11.6705 6.23981 11.9092C6.47848 12.1479 6.81575 12.2801 7.21114 12.2801V12.0801ZM8.35338 10.9379C8.35338 11.2878 8.23717 11.5717 8.04105 11.7678C7.84494 11.9639 7.56109 12.0801 7.21114 12.0801V12.2801C7.60654 12.2801 7.94381 12.1479 8.18248 11.9092C8.42114 11.6705 8.55338 11.3333 8.55338 10.9379H8.35338ZM7.21114 9.79565C7.56109 9.79565 7.84494 9.91186 8.04105 10.108C8.23717 10.3041 8.35338 10.5879 8.35338 10.9379H8.55338C8.55338 10.5425 8.42114 10.2052 8.18248 9.96655C7.94381 9.72788 7.60654 9.59564 7.21114 9.59564V9.79565ZM6.06891 10.9379C6.06891 10.5879 6.18512 10.3041 6.38123 10.108C6.57735 9.91186 6.8612 9.79565 7.21114 9.79565V9.59564C6.81575 9.59564 6.47848 9.72788 6.23981 9.96655C6.00114 10.2052 5.86891 10.5425 5.86891 10.9379H6.06891Z"
      fill={color}
      mask="url(#path-1-outside-1)"
    />
  </svg>
)

export default IconLocale
