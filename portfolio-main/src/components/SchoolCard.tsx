import Link from "next/link";
import { TagList } from "./TagList";
import { BlogPost } from "types/School";
import { convertDateToReadableFormat } from "utils/common";
import Image from "next/image";

export const BlogCard = ({ blogPost }: { blogPost: BlogPost }) => {
	const { title, slug, summary, date, tags, blogImage } = blogPost;
	return (
		<div className="card md:max-w-full max-w-md md:card-side bg-base-200 shadow-xl p-4 border border-gray-700 gap-8 mx-auto">
			<div className="flex flex-col w-full">
				hey
			</div>
			<div className="w-full">
				hey
			</div>
		</div>
	);
};

/*
		<div className="card md:max-w-full max-w-md md:card-side bg-base-200 shadow-xl p-4 border border-gray-700 gap-8 mx-auto">
			<figure className="md:max-w-xs h-full">
				<Image
					src={"/" + blogImage}
					alt="Project"
					width={500}
					height={200}
					className="rounded-xl"
				/>
			</figure>
			<div className="card-body p-0">
				<Link href={`/blog/${slug}`} className="card-title text-3xl hover:text-primary">
					{title}
				</Link>
				<p className="font-thin text-gray-100  text-sm">
					Posted on {convertDateToReadableFormat(date)}
				</p>
				<p className="prose py-3 min-w-full">{summary}</p>
				<TagList tagList={tags} />
				<div className="card-actions justify-end"></div>
			</div>
		</div>
*/

/*

TailWind-css:

Here used
	•	card: Custom class (could be defined elsewhere in your CSS or project).
	•	md:max-w-full: Sets the maximum width to 100% for medium screens and larger.
	•	max-w-md: Sets the maximum width to 28rem (448px) for small screens.
	•	bg-base-200: Sets the background color (custom class likely defined in your Tailwind config or a utility class).
	•	shadow-xl: Applies a large box-shadow.
	•	p-4: Adds padding of 1rem on all sides.
	•	border: Adds a border.
	•	border-gray-700: Sets the border color to a specific shade of gray.
	•	gap-8: Adds a gap of 2rem between grid or flex items.
	•	mx-auto: Centers the element horizontally using margin auto.
	•	w-full: Sets the width to 100%.


others:

Layout

	•	Container:
	•	container: Centers and sets the max-width of an element.
	•	Box Model:
	•	block: Display an element as a block.
	•	inline-block: Display an element as an inline-block.
	•	inline: Display an element as an inline element.
	•	flex: Display an element as a flex container.
	•	inline-flex: Display an element as an inline flex container.
	•	grid: Display an element as a grid container.
	•	inline-grid: Display an element as an inline grid container.
	•	hidden: Hide an element.
	•	Spacing:
	•	p-4: Padding of 1rem on all sides.
	•	pt-4, pr-4, pb-4, pl-4: Padding of 1rem on the top, right, bottom, and left sides, respectively.
	•	m-4: Margin of 1rem on all sides.
	•	mt-4, mr-4, mb-4, ml-4: Margin of 1rem on the top, right, bottom, and left sides, respectively.
	•	space-x-4: Horizontal space between children elements.
	•	space-y-4: Vertical space between children elements.

Flexbox and Grid

	•	Flexbox:
	•	flex-row: Flex direction row.
	•	flex-col: Flex direction column.
	•	flex-wrap: Flex wrap.
	•	justify-start, justify-center, justify-end, justify-between, justify-around, justify-evenly: Justify content.
	•	items-start, items-center, items-end, items-stretch: Align items.
	•	Grid:
	•	grid-cols-2, grid-cols-3, grid-cols-4: Set the number of columns.
	•	col-span-2: Span columns.
	•	gap-4: Grid gap.

Sizing

	•	Width:
	•	w-1/2, w-1/3, w-1/4: Width fraction of the parent.
	•	w-full: Full width.
	•	w-screen: Width of the screen.
	•	Height:
	•	h-1/2, h-1/3, h-1/4: Height fraction of the parent.
	•	h-full: Full height.
	•	h-screen: Height of the screen.

Typography

	•	Text Color:
	•	text-black, text-white, text-gray-700, text-red-500, text-blue-500: Set text color.
	•	Text Size:
	•	text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl: Set text size.
	•	Font Weight:
	•	font-thin, font-extralight, font-light, font-normal, font-medium, font-semibold, font-bold, font-extrabold, font-black: Set font weight.
	•	Text Alignment:
	•	text-left, text-center, text-right, text-justify: Set text alignment.

Backgrounds

	•	Background Color:
	•	bg-transparent, bg-black, bg-white, bg-gray-500, bg-red-500, bg-blue-500: Set background color.
	•	Background Size:
	•	bg-auto, bg-cover, bg-contain: Set background size.

Borders

	•	Border Width:
	•	border, border-2, border-4, border-8: Set border width.
	•	Border Color:
	•	border-transparent, border-black, border-white, border-gray-500, border-red-500, border-blue-500: Set border color.
	•	Border Radius:
	•	rounded-none, rounded-sm, rounded, rounded-md, rounded-lg, rounded-full: Set border radius.

Shadows

	•	Box Shadow:
	•	shadow-xs, shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl: Set box shadow.

Interactivity

	•	Hover and Focus States:
	•	hover:bg-blue-500: Change background color on hover.
	•	focus:outline-none: Remove outline on focus.


Positioning

	•	Position:
	•	static, fixed, absolute, relative, sticky: Set the position property.
	•	Top/Right/Bottom/Left:
	•	top-0, right-0, bottom-0, left-0: Set the position to 0 from the respective side.
	•	inset-0: Set all four sides to 0.

Z-Index

	•	Z-Index:
	•	z-0, z-10, z-20, z-30, z-40, z-50: Set the z-index property.

Opacity

	•	Opacity:
	•	opacity-0, opacity-25, opacity-50, opacity-75, opacity-100: Set the opacity.

Colors

	•	Text Color:
	•	text-indigo-500, text-pink-500, text-yellow-500, text-green-500, text-purple-500: Set specific text colors.
	•	Background Color:
	•	bg-indigo-500, bg-pink-500, bg-yellow-500, bg-green-500, bg-purple-500: Set specific background colors.

Borders and Dividers

	•	Border Radius:
	•	rounded-t-none, rounded-t-sm, rounded-t: Set border radius for the top.
	•	rounded-b-none, rounded-b-sm, rounded-b: Set border radius for the bottom.
	•	rounded-l-none, rounded-l-sm, rounded-l: Set border radius for the left.
	•	rounded-r-none, rounded-r-sm, rounded-r: Set border radius for the right.
	•	Border Style:
	•	border-solid, border-dashed, border-dotted, border-double, border-none: Set border style.

Tables

	•	Table Layout:
	•	table-auto, table-fixed: Set table layout.
	•	Table Borders:
	•	border-collapse, border-separate: Set border collapse.

Transitions and Animations

	•	Transition Property:
	•	transition-none, transition-all, transition: Apply transitions.
	•	Transition Duration:
	•	duration-75, duration-100, duration-150, duration-200: Set transition duration.
	•	Transition Timing Function:
	•	ease-linear, ease-in, ease-out, ease-in-out: Set transition timing function.
	•	Transform:
	•	transform, transform-gpu, transform-none: Apply transforms.
	•	Transform Scale:
	•	scale-0, scale-50, scale-75, scale-90, scale-95, scale-100, scale-105, scale-110, scale-125, scale-150: Set scale.
	•	Transform Rotate:
	•	rotate-0, rotate-45, rotate-90, rotate-180: Set rotation.

Flexbox Alignment

	•	Align Content:
	•	content-start, content-center, content-end, content-between, content-around, content-evenly: Align content in flexbox.

Cursor

	•	Cursor:
	•	cursor-auto, cursor-default, cursor-pointer, cursor-wait, cursor-text, cursor-move, cursor-not-allowed: Set cursor type.

Lists

	•	List Style:
	•	list-none, list-disc, list-decimal: Set list style.

Visibility

	•	Visibility:
	•	visible, invisible: Set visibility.

Yes, Tailwind CSS has many more utility classes and options to explore. Below are additional categories and classes:

Sizing

	•	Min-Width:
	•	min-w-0, min-w-full, min-w-min, min-w-max: Set the minimum width.
	•	Min-Height:
	•	min-h-0, min-h-full, min-h-screen: Set the minimum height.
	•	Max-Width:
	•	max-w-none, max-w-xs, max-w-sm, max-w-md, max-w-lg, max-w-xl, max-w-2xl, max-w-3xl, max-w-4xl, max-w-5xl, max-w-6xl, max-w-full, max-w-screen-sm, max-w-screen-md, max-w-screen-lg, max-w-screen-xl: Set the maximum width.
	•	Max-Height:
	•	max-h-0, max-h-full, max-h-screen: Set the maximum height.

Typography (continued)

	•	Line Height:
	•	leading-none, leading-tight, leading-snug, leading-normal, leading-relaxed, leading-loose: Set line height.
	•	Letter Spacing:
	•	tracking-tighter, tracking-tight, tracking-normal, tracking-wide, tracking-wider, tracking-widest: Set letter spacing.
	•	Font Family:
	•	font-sans, font-serif, font-mono: Set font family.

Backgrounds (continued)

	•	Background Attachment:
	•	bg-fixed, bg-local, bg-scroll: Set background attachment.
	•	Background Position:
	•	bg-bottom, bg-center, bg-left, bg-left-bottom, bg-left-top, bg-right, bg-right-bottom, bg-right-top, bg-top: Set background position.
	•	Background Repeat:
	•	bg-repeat, bg-no-repeat, bg-repeat-x, bg-repeat-y, bg-repeat-round, bg-repeat-space: Set background repeat.

Borders (continued)

	•	Border Opacity:
	•	border-opacity-0, border-opacity-25, border-opacity-50, border-opacity-75, border-opacity-100: Set border opacity.

Dividers

	•	Divide Width:
	•	divide-x, divide-x-2, divide-x-4, divide-x-8, divide-y, divide-y-2, divide-y-4, divide-y-8: Set divider width between children elements.
	•	Divide Color:
	•	divide-transparent, divide-current, divide-black, divide-white, divide-gray-500, divide-red-500, divide-blue-500: Set divider color.
	•	Divide Style:
	•	divide-solid, divide-dashed, divide-dotted, divide-double, divide-none: Set divider style.

Effects

	•	Box Shadow Color:
	•	shadow-black, shadow-white, shadow-gray-500, shadow-red-500, shadow-blue-500: Set shadow color.

Filters

	•	Filter:
	•	filter, filter-none: Apply or remove filter effects.
	•	Blur:
	•	blur-sm, blur, blur-md, blur-lg, blur-xl, blur-2xl, blur-3xl: Apply blur effect.
	•	Brightness:
	•	brightness-0, brightness-50, brightness-75, brightness-90, brightness-95, brightness-100, brightness-105, brightness-110, brightness-125, brightness-150, brightness-200: Set brightness.
	•	Contrast:
	•	contrast-0, contrast-50, contrast-75, contrast-100, contrast-125, contrast-150, contrast-200: Set contrast.
	•	Grayscale:
	•	grayscale-0, grayscale: Apply grayscale effect.
	•	Hue Rotate:
	•	hue-rotate-0, hue-rotate-15, hue-rotate-30, hue-rotate-60, hue-rotate-90, hue-rotate-180: Apply hue rotation.
	•	Invert:
	•	invert-0, invert: Invert colors.
	•	Saturate:
	•	saturate-0, saturate-50, saturate-100, saturate-150, saturate-200: Set saturation.
	•	Sepia:
	•	sepia-0, sepia: Apply sepia effect.

Accessibility

	•	Screen Reader:
	•	sr-only: Hide an element visually but keep it accessible to screen readers.
	•	not-sr-only: Undo sr-only.

*/