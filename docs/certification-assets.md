# Certification asset sources

These are official issuer visuals, not personal verification links. No issue dates,
credential IDs, or individual credential URLs were supplied. The website therefore
omits those fields. The four credential names come from the user's instructions.

| Local asset | Official source | Notes |
| --- | --- | --- |
| `public/images/certifications/aws.svg` | https://aws.amazon.com/certification/ | Official navigation logo SVG extracted without changing its paths; `viewBox` capitalization normalized for standalone SVG. The user did not specify Associate or Professional, so no level-specific badge is used. |
| `public/images/certifications/finops-practitioner.svg` | https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg | Official certification artwork, discovered through the issuer's WordPress media API. |
| `public/images/certifications/nasaa.png` | https://www.nasaa.org/wp-content/themes/divi-child/images/nasaa_logo_blue.png | Official NASAA logo from its Exams page. Series 65 is a NASAA exam administered by FINRA: https://www.finra.org/registration-exams-ce/qualification-exams/series65 |
| `public/images/certifications/claude-code.svg` | https://cc.sj-cdn.net/instructor/4hdejjwplbrm-anthropic/courses/3n2veylcj0hl/promo-image.1750989653.svg | Official course artwork linked by https://anthropic.skilljar.com/claude-code-in-action |

FinOps issuer reference: https://www.finops.org/training-certification/recommended/practitioner/

# Locked experience copy

`data/kelvolta.ts` is the frozen source used by both public experience render paths.
`npm test` checks exact data, omitted fields, the actual rendered card, and duplicate
copy in public source directories. `npm run build` runs these checks through its
`prebuild` hook. Do not enrich this entry from other materials. Public-copy changes
require explicit user instruction, including changes to the independent test fixture.
