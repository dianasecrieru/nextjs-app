import Link from "next/link";
import { StyledLink } from "./nav.styled";

export const Nav = () => (
  <div>
    <StyledLink href="/">SSR page</StyledLink>
    <StyledLink href="/isr/isr-1">ISR page 1</StyledLink>
    <StyledLink href="/isr/isr-2">ISR page 2</StyledLink>
    <StyledLink href="/ondemand-isr/ondemand-isr-1">
      On Demand ISR page 1
    </StyledLink>
    <StyledLink href="/ondemand-isr/ondemand-isr-2">
      On Demand ISR page 2
    </StyledLink>
    <StyledLink href="/middleware-test/">
      Middleware
    </StyledLink>
  </div>
);
