import { redirect } from 'next/navigation'

// The site is one page now; old /research links jump to its Research section.
export default function Page() {
  redirect('/#research')
}
