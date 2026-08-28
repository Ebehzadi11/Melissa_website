/**
 * Photographic full moon (transparent PNG) cresting out of the hero's
 * top-left corner. A soft radial halo sits behind it so it reads as a
 * luminous body against the light background. Purely decorative / static.
 */
import Image from "next/image";

export function Moon({ className }: { className?: string }) {
  return (
    <div aria-hidden className={className}>
      <div className="relative h-full w-full">
        {/* soft halo bleed */}
        <div
          className="absolute inset-[-14%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,183,156,0.30) 55%, rgba(201,183,156,0) 72%)",
          }}
        />
        <Image
          src="/media/moon.png"
          alt=""
          fill
          sizes="560px"
          className="object-contain opacity-[0.5] [filter:sepia(0.3)_brightness(1.18)_contrast(0.95)]"
          priority
        />
      </div>
    </div>
  );
}
