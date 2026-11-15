/** Altura aproximada do header fixo / sticky */
export const SITE_HEADER_PT = 'pt-[75px]'

const slideSectionBase = (...extra: (string | false | undefined)[]) =>
  [
    'relative box-border flex min-h-[100svh] w-full flex-col overflow-hidden',
    SITE_HEADER_PT,
    'lg:h-[100svh] lg:min-h-0',
    ...extra.filter(Boolean),
  ].join(' ')

export function slideSectionClasses(...extra: (string | false | undefined)[]) {
  return slideSectionBase(...extra)
}