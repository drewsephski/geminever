# GemiNever

The goldfish that went to business school. Real, sourced Gemini fails, roasted daily.

## Adding a post
Commit a file at `content/posts/YYYY-MM-DD-<slug>.json`:

```json
{
  "slug": "unique-url-slug",
  "date": "YYYY-MM-DD",
  "title": "Headline",
  "product": "Ask Gemini in YouTube",
  "context": "optional one line setup",
  "exchanges": [{ "prompt": "what the user typed", "response": "Gemini's exact words" }],
  "roast": ["line one", "line two"],
  "verdict": "optional one line knockout",
  "tags": ["goldfish", "count", "copypaste", "linkedin", "refuses", "wrong", "sponsored"],
  "source": "optional URL",
  "submittedBy": "optional"
}
```

Tags (pick any that fit, used by /feed filters): goldfish = forgets context, count = math or counting, copypaste = recycled answers, linkedin = corporate slop, refuses = refuses harmless tasks, wrong = confidently wrong, sponsored = random citations.

Rule: never invent Gemini responses. Real and sourced only. No em or en dashes.
