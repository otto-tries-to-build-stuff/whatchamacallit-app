# Whatchamacallit — Content Seed

The catalogue of entries to build, organised by category. Roughly **125 entries across 10 categories**. Within each category, entries are ordered by commonality — most essential first, most niche last.

## How to read this

Each entry has a suggested **commonality tier** in square brackets. The format matches `meta.commonality` in the entry schema (see CLAUDE.md). The grid sorts ascending, so `[1]` entries float to the top.

- `[1]` **Essential** — used in nearly every app. ~30 entries.
- `[2]` **Common** — you'll meet these regularly in modern apps. ~50 entries.
- `[3]` **Specialised** — useful in specific contexts but less universal. ~40 entries.
- `[4]` **Niche or advanced** — worth knowing exists, not always worth building first. ~8 entries.
- `[5]` **Obscure** — reserved for additions you discover later.

Aliases are *italicised after the name*. Some entries blur category lines (parallax could live in scroll animations OR layout & effects; drag-and-drop could be a micro-interaction OR an interaction pattern). I've placed each by primary use; feel free to re-file as you build.

**Suggested build order:** Tier 1 first → great MVP at ~30 entries. Then tier 2 → ~80 entries, hitting the v1 target. Tiers 3–4 fill out the encyclopaedia later.

---

## 1. Navigation
Getting around the app.

- **Tabs** `[1]` *(Tab Bar, Tabbed Interface, Segmented Nav)* — A horizontal strip of labels that switches between mutually exclusive sibling views, only one visible at a time.
- **Breadcrumbs** `[1]` *(Breadcrumb Trail)* — A horizontal sequence of links showing the user's current position in a hierarchical site or app.
- **Pagination** `[1]` *(Pager, Page Numbers)* — Numbered links that split long content across multiple pages, with previous/next controls.
- **Sidebar** `[2]` *(Side Nav, Vertical Nav)* — A persistent vertical column of navigation links along the side of the layout.
- **Bottom Nav** `[2]` *(Mobile Tab Bar)* — A horizontal row of 3–5 primary destinations fixed to the bottom of a mobile screen.
- **Hamburger Menu** `[2]` *(Burger, Three-line Menu)* — A three-stacked-line icon that reveals a hidden navigation menu, usually a side drawer.
- **Stepper** `[2]` *(Wizard, Progress Steps)* — A horizontal or vertical indicator showing progress through a multi-step process.
- **Anchor Links** `[2]` *(Jump Links, In-page Nav, Table of Contents)* — Links that scroll the page to a specific section, often shown in a sticky list alongside long content.
- **Mega Menu** `[3]` — A large expanded dropdown panel displaying many grouped links and sometimes featured content, triggered from a top-level nav item.
- **Navigation Rail** `[3]` *(Side Rail)* — A narrow vertical strip of icon-only nav items along the edge, sitting between a hamburger and a full sidebar.
- **Command Palette** `[3]` *(Command Bar, Quick Switcher, ⌘K Menu)* — A keyboard-invoked search interface (usually ⌘K) for jumping to commands, files, or pages by typing.

## 2. Disclosure
Show or hide content on demand.

- **Modal Dialog** `[1]` *(Modal, Lightbox)* — An overlay window that interrupts the main flow and demands user interaction before continuing.
- **Dropdown Menu** `[1]` *(Menu, Popover Menu)* — A small floating panel of action items revealed by clicking a button.
- **Tooltip** `[1]` *(Hint, Infotip)* — A small text bubble appearing on hover or focus, giving a brief label or hint about the element underneath.
- **Accordion** `[1]` *(Disclosure, Collapsible Sections)* — A vertical stack of expandable rows where each row reveals hidden content when its header is clicked.
- **Popover** `[2]` *(Floating Panel)* — A non-modal floating container anchored to a trigger element, used to display extra information, controls, or forms without leaving the page.
- **Drawer** `[2]` *(Sheet, Off-canvas, Side Panel)* — A panel that slides in from a screen edge to display secondary content or navigation.
- **Disclosure Widget** `[2]` *(Show More, Read More, Expander)* — A simple inline toggle that expands a truncated paragraph or hides extra detail.
- **Bottom Sheet** `[2]` *(Mobile Drawer)* — A drawer that slides up from the bottom of the screen, common on mobile for actions or secondary detail.
- **Context Menu** `[3]` *(Right-click Menu)* — A dropdown menu triggered by right-click or long-press, showing actions relevant to the target element.
- **Hovercard** `[3]` *(Preview Card, Rich Tooltip)* — A larger card-shaped overlay shown on hover that previews richer content like user profiles or link previews.
- **Toggle Tip** `[4]` *(Tap Tooltip)* — A touch-friendly tooltip variant triggered by tap on a dedicated info icon rather than hover.

## 3. Input
Capturing data from the user.

- **Text Field** `[1]` *(Input, Text Input)* — A single-line box for typing short text like names, emails, or queries.
- **Textarea** `[1]` *(Multi-line Input)* — A multi-line box for longer free-form text such as comments or descriptions.
- **Checkbox** `[1]` — A small toggleable square representing a binary on/off choice; multiple checkboxes allow multi-select.
- **Radio Group** `[1]` *(Radio Buttons)* — A set of mutually exclusive circular options where only one in the group can be selected.
- **Select** `[1]` *(Dropdown, Picker)* — A field that opens a list of predefined options when clicked, allowing one selection.
- **Toggle** `[1]` *(Switch, On/Off Switch)* — A two-state slider representing a binary setting, with immediate effect (no save).
- **Slider** `[2]` *(Range Slider)* — A horizontal track with a handle the user drags to pick a single value from a continuous range.
- **Date Picker** `[2]` *(Calendar Picker)* — A calendar-style overlay for selecting a date or date range.
- **Form Field** `[2]` *(Field, Form Group)* — The composed unit of label + input + helper/error text — the atomic unit of a form.
- **Combobox** `[2]` *(Searchable Select, Autocomplete Select)* — A select-style field where typing filters the list of options, blending input and dropdown.
- **Autocomplete** `[2]` *(Typeahead, Suggest)* — A text field that suggests matching values as the user types, often allowing arbitrary input too.
- **Segmented Control** `[2]` *(Segmented Buttons, Pill Switcher)* — A row of joined buttons offering a small set of mutually exclusive options, more compact than radios.
- **File Uploader** `[2]` *(File Input, Dropzone)* — A control accepting one or more files via file-browser button and/or drag-and-drop.
- **Number Input** `[3]` *(Numeric Stepper, Spinner)* — A numeric field with +/− increment buttons or up/down arrows to step the value.
- **OTP Input** `[3]` *(One-time Code Input, PIN Input)* — A set of one-character inputs designed for entering verification codes digit-by-digit.
- **Range Slider** `[3]` *(Dual-handle Slider)* — A slider with two handles defining a value range (min/max), common in filters.
- **Time Picker** `[3]` — An input for selecting a time of day, often paired with a date picker.
- **Rating** `[3]` *(Star Rating)* — A row of icons (usually stars) the user clicks to rate something on a discrete scale.
- **Color Picker** `[3]` *(Swatch Picker)* — A control for choosing a colour via swatches, sliders, or hex input.

## 4. Selection & Display
Showing content collections.

- **Card** `[1]` — A self-contained rectangular container grouping related content (image, title, summary, actions) into a single tappable unit.
- **List** `[1]` *(Item List)* — A vertical sequence of items, plain text or with avatars/icons.
- **Table** `[1]` — A grid of rows and columns presenting tabular data with column headers.
- **Avatar** `[1]` *(Profile Picture, User Image)* — A small image (or initials fallback) representing a user or entity, usually circular.
- **Badge** `[1]` — A small label attached to an element to mark status or type ("New", "Beta", category tags).
- **Tag** `[1]` *(Chip, Label, Pill)* — A small inline label representing a category, status, or filter, often grouped and sometimes dismissable.
- **Grid** `[2]` — A two-dimensional arrangement of equal-sized items, typically images or cards, laid out in rows and columns.
- **Carousel** `[2]` *(Slider, Slideshow)* — A horizontally scrolling sequence of slides, typically with arrows and indicator dots, showing one or a few at a time.
- **Data Table** `[2]` — A richer table with built-in sorting, filtering, selection, pagination, and often column resizing.
- **Calendar** `[2]` *(Full Calendar)* — A full month or week view showing dates in a grid, often supporting events and selection — distinct from a date picker.
- **Avatar Group** `[2]` *(Stacked Avatars)* — Overlapping avatars showing a collection of people, often with a "+N more" indicator.
- **Gallery** `[3]` *(Image Gallery, Lightbox Gallery)* — A grid of thumbnails that opens larger images in a lightbox when clicked.
- **Timeline** `[3]` — A vertical or horizontal sequence of events ordered chronologically, each with a marker and label.
- **Tree View** `[3]` *(Tree, Hierarchical List)* — A nested expandable list showing parent–child hierarchies like folder structures or org charts.
- **Kanban Board** `[3]` *(Board, Swimlane View)* — Columns of cards representing items moving through stages of a workflow, drag-and-drop between columns.
- **Masonry** `[3]` *(Pinterest Layout, Brick Layout)* — A grid where items pack tightly to fill vertical space despite varying heights.
- **Infinite Scroll** `[3]` *(Endless Scroll)* — A pattern that auto-loads more items as the user scrolls toward the bottom, with no pagination.
- **Virtual List** `[4]` *(Windowed List, Virtualised List)* — A list that only renders visible items, swapping them as the user scrolls — for very long datasets.

## 5. Feedback
Telling the user something happened.

- **Toast** `[1]` *(Snackbar, Flash Message)* — A small auto-dismissing notification appearing briefly (usually a screen corner) to confirm an action.
- **Inline Alert** `[1]` *(Callout, Notice)* — A coloured rectangular message embedded in the page content, communicating info, success, warning, or error.
- **Spinner** `[1]` *(Loader, Loading Spinner, Indeterminate Progress)* — A rotating shape indicating an in-progress task of unknown duration.
- **Progress Bar** `[1]` *(Determinate Progress)* — A horizontal bar that fills as a known-duration task advances.
- **Skeleton Loader** `[2]` *(Skeleton Screen, Placeholder)* — A grey blocky preview of layout shown while real content loads, preserving structure.
- **Empty State** `[2]` *(Zero State, Blank Slate)* — A purposeful "nothing here yet" view with illustration and guidance, shown when a list or page has no content.
- **Confirmation Dialog** `[2]` *(Alert Dialog)* — A modal asking the user to confirm or cancel a consequential action.
- **Dot Indicator** `[2]` *(Status Dot, Notification Dot)* — A small filled circle indicating presence, status, or unread state, often attached to an avatar or icon.
- **Error State** `[2]` — A view shown when something failed, explaining what went wrong and offering recovery actions.
- **Banner** `[3]` *(System Bar, Notification Bar)* — A persistent strip across the top of the page conveying a system-wide message like maintenance or an account warning.
- **Notification Centre** `[3]` *(Inbox)* — A persistent panel listing past system notifications, usually accessed via a bell icon.

## 6. Layout & Effects
Page-level structural patterns and ambient effects.

- **Hero** `[1]` *(Hero Section, Above-the-fold)* — The large top-of-page section featuring a primary headline, supporting text, and call-to-action.
- **Sticky Section** `[1]` *(Pinned Section, Sticky Header)* — An element that locks in place once scrolled to, while content continues to scroll beneath.
- **Bento Grid** `[2]` *(Mosaic, Tile Grid)* — An asymmetric tiled layout with varied sizes used to showcase features, popularised by Apple.
- **Full-bleed** `[2]` — A section that spans the entire viewport width with no side margins, often used for hero images or video.
- **Marquee** `[2]` *(Ticker, Scroller)* — A continuously scrolling horizontal strip of text, logos, or images, looping seamlessly.
- **Aurora Background** `[2]` *(Gradient Mesh, Ambient Glow, Animated Gradient)* — A softly blurred field of overlapping colour gradients used as ambient backdrop, evoking the northern lights.
- **Split-screen Layout** `[3]` — A page divided into two side-by-side panels of comparable weight, each scrollable or focused on different content.
- **Mesh Gradient** `[3]` *(Multi-stop Gradient)* — A static blended gradient using multiple colour points to produce a soft painterly background.
- **Dot Grid Background** `[3]` — A subtle background of evenly spaced dots, often used in technical or design tool UIs.
- **Card Stack** `[3]` — A pile of cards offset behind one another, suggesting depth and sequence (e.g. swipeable cards).
- **Asymmetric Grid** `[3]` *(Broken Grid)* — A grid layout that deliberately breaks regular alignment for visual interest, mixing column widths and offsets.
- **Particle Background** `[3]` *(Particle Field)* — An animated field of small moving dots or shapes used as ambient background, sometimes reacting to the cursor.
- **Spotlight Effect** `[3]` *(Cursor Spotlight)* — A bright radial glow that follows the cursor across a dark surface, highlighting whatever it's near.
- **Magazine Layout** `[4]` *(Editorial Layout)* — A multi-column, typography-led layout inspired by print, prioritising hierarchy and reading flow.
- **Animated Noise** `[4]` *(Grain Overlay)* — A subtle moving noise or grain texture overlaid on backgrounds for a tactile, filmic feel.

## 7. Micro-interactions
Small reactive animations tied to single elements.

- **Button Press** `[1]` *(Tap Feedback)* — A small scale or colour change on button click giving immediate tactile feedback.
- **Hover Lift** `[1]` *(Lift on Hover, Card Lift)* — A card or button rising slightly (translateY plus shadow) when hovered.
- **Focus Ring** `[1]` *(Focus Outline)* — A visible ring around the currently focused element for keyboard accessibility, often animated in.
- **Ripple** `[2]` *(Material Ripple)* — A circular ink-spread originating from the click point and expanding outward, popularised by Material Design.
- **Icon Morph** `[2]` *(Icon Transition, Morphing Icon)* — A smooth shape-change between two icon states (e.g. play↔pause, hamburger↔close).
- **Pulse** `[2]` — A repeating subtle scale or opacity pulse drawing attention to a control such as an unread indicator.
- **Drag-and-drop** `[2]` *(Sortable, Reorder)* — A pattern letting users grab items with a handle and reorder, move, or swap them via drag gesture.
- **Like Burst** `[3]` *(Heart Burst, Reaction Animation)* — A playful particle or scale burst when toggling a "like" or reaction.
- **Shake** `[3]` *(Error Shake)* — A short horizontal back-and-forth shake of an invalid field signalling rejection.
- **Confetti** `[3]` *(Success Burst)* — A celebratory shower of coloured particles triggered on a major success event.
- **Magnetic Button** `[4]` *(Cursor Attraction)* — A button that subtly drifts toward the cursor as it approaches, signalling interactivity.

## 8. Scroll Animations
Triggered by or linked to scroll.

- **Fade-in on View** `[1]` *(Reveal on Scroll, Fade-in-up)* — Content fades and slides into place as it enters the viewport.
- **Parallax Scrolling** `[1]` *(Depth Scroll, Multi-layer Scroll)* — Background and foreground layers move at different speeds while scrolling, creating depth.
- **Reveal Stagger** `[2]` *(Staggered Reveal)* — Sibling elements like list items or cards animate in one after another with a small delay between each.
- **Scroll Progress Bar** `[2]` *(Reading Progress)* — A thin bar at the top of the viewport indicating how far through the page the user has scrolled.
- **Scroll-triggered Counter** `[2]` *(Count-up on View)* — A numerical value animates from zero to its final number as it enters the viewport.
- **Scroll-snap** `[2]` *(Snap Scrolling)* — Scrolling automatically settles on defined snap points, typically sections or cards.
- **Sticky Scrub** `[3]` *(Pinned Scrub Section)* — A section pins on screen while an internal animation progresses against scroll, then unpins.
- **Scroll-linked Animation** `[3]` *(Scrubbing Animation, Scroll-driven Animation)* — Animation progress tied directly to scroll position rather than playing on a timer.
- **Horizontal Scroll Section** `[3]` *(Side-scrolling Section)* — A pinned section where vertical scroll translates content horizontally across the viewport.
- **Pin on Scroll** `[3]` *(Sticky Pin)* — An element pins to the viewport while a parent section scrolls past, then releases.
- **Scroll Reveal Mask** `[3]` *(Wipe Reveal)* — Content is unmasked left-to-right or bottom-to-top as it enters the viewport.

## 9. Text Animations
Typography in motion.

- **Split Text** `[1]` *(Stagger Reveal, Letter Split, Per-character Animation)* — Text broken into individual letters or words that animate in sequence.
- **Typewriter** `[2]` *(Type-on, Typing Effect)* — Characters appear one at a time as if being typed, often with a blinking cursor.
- **Count Up** `[2]` *(Number Counter, Odometer)* — A number animates from a starting value up to its target, often used for stats.
- **Blur In** `[2]` *(Defocus Reveal)* — Text fades in from a blurred state to crisp focus.
- **Marquee Text** `[2]` *(Scrolling Text, News Ticker)* — Text continuously scrolls horizontally across a fixed-width container.
- **Rotating Words** `[2]` *(Word Swap, Word Carousel)* — A single word in a phrase cycles through alternatives, e.g. *"Build something <fast / beautiful / together>"*.
- **Gradient Shimmer** `[3]` *(Shine Effect, Sheen)* — A bright highlight sweeps across text from left to right on a coloured gradient base.
- **Scramble** `[3]` *(Decoder, Cipher Text, Glitch Text)* — Letters cycle through random characters before settling on the final string.
- **Text Mask Reveal** `[3]` *(Mask Up, Wipe-in)* — Text is revealed by an animated mask moving across it via clip-path animation.
- **Wavy Text** `[3]` *(Wave Animation)* — Letters rise and fall in a sine wave, giving text a gentle undulating motion.
- **Letter Drop** `[4]` — Letters fall into place from above, settling into position one or several at a time.
- **Variable Font Animation** `[4]` *(Weight Morph, Axis Animation)* — Text fluidly shifts along a variable font axis (weight, width, slant) during interaction.

## 10. Page Transitions
Effects between routes or major views.

- **Crossfade** `[1]` — One page simply fades out while the next fades in, with no movement.
- **Route Transition** `[1]` *(Page Transition)* — An animation playing when navigating between routes — fade, slide, or crossfade between pages.
- **Modal Slide-up** `[2]` — A new view animates up from the bottom edge over the current view, with the underlying view receding slightly.
- **Shared-element Transition** `[2]` *(Magic Move, Layout Animation, FLIP Animation)* — An element appears to morph from its position on one page to a new position on the next, preserving identity across the transition.
- **View Transition** `[3]` *(Native View Transition)* — Browser-native cross-route or cross-state transitions using the `view-transition` CSS API.
- **Stack Transition** `[3]` — The departing page slides downward or back while the new page rises in front, creating a stack illusion.
- **Curtain Transition** `[3]` *(Wipe Transition)* — A coloured panel sweeps across the screen to mask the route change.
- **Mask Transition** `[3]` *(Circle Reveal)* — A shape (circle, blob) expands or contracts to mask the incoming page.
- **Flip Transition** `[4]` — A 3D flip between two faces, used for card flips and occasionally page transitions.
- **Cube Transition** `[4]` *(3D Rotate)* — Pages animate as faces of a rotating cube, common in mobile onboarding.

---

## Future additions to consider

Composite patterns (made of the primitives above) that might warrant their own entries later if you want a "Patterns" 11th category:

- Pricing Table, Comparison Table, FAQ, Login Form, Search Results Layout, Comments Thread, Chat Bubble, Audio Player, Video Player, Settings Panel, Onboarding Flow.
