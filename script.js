// Scene Data
// In a real app, this might be loaded from a JSON file.
// For now, we manually map a few demo scenes using the files we saw in assets/.
const scenes = {

    "western_room_1": {
        id: "western_room_1",
        name: "洋室１",
        image: "assets/rooms/IMG_20251209_145408_231.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "living_2", position: "2.0 0 -3.5", rotation: "0 0 0" } // 1 o'clock
        ]
    },
    "hallway_1": {
        id: "hallway_1",
        name: "廊下１",
        image: "assets/rooms/IMG_20251209_145410_745.JPG",
        rotation: "0 -90 0",
        links: [

            { target: "entrance", position: "4 0 0", rotation: "0 0 0" },       // 3 o'clock
            { target: "hallway_2", position: "0 0 4", rotation: "0 0 0" }       // 6 o'clock
        ]
    },
    "entrance": {
        id: "entrance",
        name: "玄関",
        image: "assets/rooms/IMG_20251209_145413_332.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "hallway_1", position: "-4 0 0", rotation: "0 0 0" }, // 9 o'clock (opp 3)
            { target: "porch", position: "0 0 -4", rotation: "0 0 0" }      // 12 o'clock
        ]
    },
    "porch": {
        id: "porch",
        name: "ポーチ",
        image: "assets/rooms/IMG_20251209_145446_734.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "entrance", position: "0 0 4", rotation: "0 0 0" } // 6 o'clock (opp 12)
        ]
    },
    "hallway_2": {
        id: "hallway_2",
        name: "廊下２",
        image: "assets/rooms/IMG_20251209_145443_896.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "hallway_1", position: "0 0 -4", rotation: "0 0 0" }, // 12 o'clock (opp 6)
            { target: "washroom", position: "-4 0 0", rotation: "0 0 0" },  // 9 o'clock
            { target: "restroom", position: "4 0 0", rotation: "0 0 0" },   // 3 o'clock
            { target: "living_2", position: "0 0 4", rotation: "0 0 0" }    // 6 o'clock
        ]
    },
    "washroom": {
        id: "washroom",
        name: "洗面室",
        image: "assets/rooms/IMG_20251209_145403_274.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "hallway_2", position: "4 0 0", rotation: "0 0 0" }, // 3 o'clock (opp 9)
            { target: "bathroom", position: "-4 0 0", rotation: "0 0 0" }  // 9 o'clock
        ]
    },
    "living_1": {
        id: "living_1",
        name: "リビング１",
        image: "assets/rooms/IMG_20251209_145347_564.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "living_2", position: "4 0 0", rotation: "0 0 0" },   // 3 o'clock (opp 9)
            { target: "living_3", position: "3.5 0 2", rotation: "0 -120 0" }, // 4 o'clock - Manual Override
            { target: "western_room_1", position: "2.0 0 3.5", rotation: "0 -150 0" }, // 5 o'clock
            { target: "balcony_1", position: "-4 0 0", rotation: "0 0 0" }  // 9 o'clock
        ]
    },
    "living_2": {
        id: "living_2",
        name: "リビング２",
        image: "assets/rooms/IMG_20251209_145350_397.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "hallway_2", position: "0 0 -4", rotation: "0 0 0" }, // 12 o'clock (opp 6)
            { target: "living_1", position: "-4 0 0", rotation: "0 0 0" }, // 9 o'clock
            { target: "living_3", position: "2.0 0 3.5", rotation: "0 -150 0" },  // 5 o'clock - Manual Override
            { target: "japanese_room", position: "4 0 0", rotation: "0 0 0" }, // 3 o'clock
            { target: "western_room_1", position: "-2.0 0 3.5", rotation: "0 150 0" } // 7 o'clock
        ]
    },
    "bathroom": {
        id: "bathroom",
        name: "浴室",
        image: "assets/rooms/IMG_20251209_145405_777.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "washroom", position: "4 0 0", rotation: "0 0 0" }   // 3 o'clock (opp 9)
        ]
    },
    "balcony_1": {
        id: "balcony_1",
        name: "バルコニー１",
        image: "assets/rooms/IMG_20251209_145438_221.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "living_1", position: "4 0 0", rotation: "0 0 0" },   // 3 o'clock (opp 9)

            { target: "balcony_4", position: "0 0 4", rotation: "0 0 0" }   // 6 o'clock
        ]
    },


    "balcony_4": {
        id: "balcony_4",
        name: "バルコニー４",
        image: "assets/rooms/IMG_20251209_145430_026.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "balcony_1", position: "0 0 -4", rotation: "0 0 0" }, // 12 o'clock (opp 6)
            { target: "balcony_5", position: "4 0 0", rotation: "0 0 0" }   // 3 o'clock
        ]
    },
    "balcony_5": {
        id: "balcony_5",
        name: "バルコニー５",
        image: "assets/rooms/IMG_20251209_145427_235.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "balcony_4", position: "-4 0 0", rotation: "0 0 0" }, // 9 o'clock (opp 3)
            { target: "living_3", position: "0 0 -4", rotation: "0 0 0" }   // 12 o'clock
        ]
    },
    "living_3": {
        id: "living_3",
        name: "リビング３",
        image: "assets/rooms/IMG_20251209_145352_987.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "living_2", position: "-2.0 0 -3.5", rotation: "0 0 0" },  // 11 o'clock (opp 5)
            { target: "living_1", position: "-3.5 0 -2", rotation: "0 0 0" }, // 10 o'clock (opp 4)
            { target: "balcony_5", position: "0 0 4", rotation: "0 0 0" },   // 6 o'clock (opp 12)
            { target: "kitchen", position: "4 0 0", rotation: "0 0 0" }      // 3 o'clock
        ]
    },
    "restroom": {
        id: "restroom",
        name: "トイレ",
        image: "assets/rooms/IMG_20251209_145400_733.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "hallway_2", position: "-4 0 0", rotation: "0 0 0" } // 9 o'clock (opp 3)
        ]
    },
    "japanese_room": {
        id: "japanese_room",
        name: "和室",
        image: "assets/rooms/IMG_20251209_145358_132.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "living_2", position: "-4 0 0", rotation: "0 0 0" } // 9 o'clock (opp 3)
        ]
    },
    "kitchen": {
        id: "kitchen",
        name: "キッチン",
        image: "assets/rooms/IMG_20251209_145355_556.JPG",
        rotation: "0 -90 0",
        links: [
            { target: "living_3", position: "-4 0 0", rotation: "0 0 0" } // 9 o'clock (opp 3)
        ]
    }
};

// State
let currentSceneId = "porch";
let isTransitioning = false;

// A-Frame Component for Navigation
AFRAME.registerComponent('navigate-on-click', {
    schema: {
        target: { type: 'string', default: '' }
    },

    init: function () {
        const data = this.data;
        const el = this.el;

        el.addEventListener('click', function () {
            if (data.target && scenes[data.target]) {
                transitionAndLoad(data.target);
            }
        });

        // Optional: Hover effect (Scale only)
        el.addEventListener('mouseenter', function () {
            el.setAttribute('scale', '1.2 1.2 1.2');
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('scale', '1 1 1');
        });
    }
});



function transitionAndLoad(sceneId) {
    if (isTransitioning || currentSceneId === sceneId) return;
    isTransitioning = true;

    const camera = document.getElementById('main-camera');
    const overlay = document.getElementById('transition-overlay');
    const loader = document.getElementById('loader');
    const navContainer = document.getElementById('navigation-container');
    const lookControls = camera.components['look-controls']; // Get look-controls component

    // Hide arrows immediately
    if (navContainer) navContainer.setAttribute('visible', 'false');

    // 1. Zoom In (FOV Animation) + Align View to Horizon (Pitch/X Animation)
    const startFov = 80;
    const endFov = 40;
    const startRotX = camera.object3D.rotation.x; // Current pitch in radians
    const startRotY = camera.object3D.rotation.y; // Current yaw in radians
    const duration = 300; // ms
    const startTime = performance.now();

    function zoomIn(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // FOV
        const currentFov = startFov + (endFov - startFov) * progress;
        camera.setAttribute('camera', 'fov', currentFov);

        // Rotation X (Pitch) - Smoothly move to 0 (Level)
        // using easing for nicer feel? 'progress' is linear here.
        // Let's stick to linear for correlation with zoom.
        camera.object3D.rotation.x = startRotX * (1 - progress);

        if (progress < 1) {
            requestAnimationFrame(zoomIn);
        } else {
            // Ensure strictly 0 at end
            camera.object3D.rotation.x = 0;
            // 2. Fade Out (Show Black Overlay)
            startFadeOut();
        }
    }

    requestAnimationFrame(zoomIn);

    function startFadeOut() {
        overlay.setAttribute('animation', {
            property: 'opacity',
            to: 1,
            dur: 300,
            easing: 'linear'
        });

        // Wait for fade to complete
        setTimeout(() => {
            performSceneSwitch();
        }, 300);
    }

    function performSceneSwitch() {
        // 1. Reset FOV instantly (Before showing text so size is correct)
        camera.setAttribute('camera', 'fov', 80);

        // Reset rotation: Keep Yaw (Y), Reset Pitch (X) and Roll (Z) to 0 (Horizon)
        camera.object3D.rotation.set(0, startRotY, 0);

        // Reactivate look-controls
        if (lookControls) {
            lookControls.pitchObject.rotation.x = 0;
            lookControls.yawObject.rotation.y = startRotY;
            lookControls.play();
        }

        // 2. Show Loader
        if (loader) loader.style.display = 'block';

        // 3. Prepare Wait Logic (Asset Load + Min Delay)
        const minWaitPromise = new Promise(resolve => setTimeout(resolve, 500));

        const imageLoadPromise = new Promise(resolve => {
            const sky = document.getElementById('sky-bg');

            // Handler for valid load
            const loadHandler = () => {
                cleanup();
                resolve();
            };

            // Clean up listener to prevent leaks
            const cleanup = () => {
                sky.removeEventListener('materialtextureloaded', loadHandler);
            };

            sky.addEventListener('materialtextureloaded', loadHandler);

            // Fallback timeout (e.g. 5s) in case event doesn't fire
            setTimeout(() => {
                cleanup();
                resolve();
            }, 5000);
        });

        // 4. Load New Scene (Trigger src change)
        loadScene(sceneId);

        // 5. Wait for both
        Promise.all([minWaitPromise, imageLoadPromise]).then(() => {
            // Show arrows again (they will be visible when fade in happens)
            if (navContainer) navContainer.setAttribute('visible', 'true');

            // Hide Loader
            if (loader) loader.style.display = 'none';

            overlay.setAttribute('animation', {
                property: 'opacity',
                to: 0,
                dur: 500,
                easing: 'linear'
            });

            // Transition Complete
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        });
    }
}

// Scene Loading Logic
function loadScene(sceneId) {
    const sceneData = scenes[sceneId];
    if (!sceneData) {
        console.error("Scene not found:", sceneId);
        return;
    }

    currentSceneId = sceneId;
    console.log("Loading scene:", sceneData.name);

    // 1. Update Sky (Background Image)
    const sky = document.getElementById('sky-bg');

    // Memory Management: Dispose of old texture to prevent crashing on iPhone (iOS Safari Limit)
    // 1. Dispose Old Texture & Nullify
    if (sky.getObject3D('mesh')) {
        const mesh = sky.getObject3D('mesh');
        if (mesh.material) {
            if (mesh.material.map) {
                mesh.material.map.dispose(); // Release GPU memory
                mesh.material.map = null;    // Break reference
            }
            mesh.material.needsUpdate = true;
        }
    }

    // 2. Clear Three.js Cache (Prevents holding multiple 4K images in JS memory)
    if (THREE.Cache) {
        THREE.Cache.clear();
    }

    // 3. Configure NEW Texture (Disable Mipmaps to save ~33% Memory)
    const onTextureLoaded = (evt) => {
        const texture = evt.detail.texture;
        if (texture) {
            texture.generateMipmaps = false;
            texture.minFilter = THREE.LinearFilter;
            texture.needsUpdate = true;
        }
        sky.removeEventListener('materialtextureloaded', onTextureLoaded);
    };
    sky.addEventListener('materialtextureloaded', onTextureLoaded);

    sky.setAttribute('src', sceneData.image);
    if (sceneData.rotation) {
        sky.setAttribute('rotation', sceneData.rotation);
    }

    // 2. Clear old arrows
    const container = document.getElementById('navigation-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // 3. Create new arrows
    sceneData.links.forEach(link => {
        // Wrapper Entity
        const wrapper = document.createElement('a-entity');
        const pos = AFRAME.utils.coordinates.parse(link.position);
        wrapper.setAttribute('position', link.position);

        // Rotation: 
        // If link.rotation is set (and not "0 0 0"), use it manually. 
        // Otherwise, look horizontal away from center.

        let finalRotString = "";

        if (link.rotation && link.rotation !== "0 0 0") {
            finalRotString = link.rotation;
        } else {
            // Auto Calculation: Look away from center
            const targetPos = new THREE.Vector3(0, pos.y, 0);
            const myPos = new THREE.Vector3(pos.x, pos.y, pos.z);

            const dummy = new THREE.Object3D();
            dummy.position.copy(myPos);
            dummy.lookAt(targetPos);

            const rot = dummy.rotation;
            const rX = THREE.MathUtils.radToDeg(rot.x);
            const rY = THREE.MathUtils.radToDeg(rot.y);
            const rZ = THREE.MathUtils.radToDeg(rot.z);

            // Wrapper faces Center (-Z). 
            // We want arrow to point AWAY (which is Local +Z in wrapper space if we flipped it? 
            // No, previously we just used the raw LookAt (Center) and the Image was rotated.
            // My previous successful edit was: `wrapper.setAttribute('rotation', `${rX} ${rY} ${rZ}`)`.
            // And Image rotation `-90 90 0`.
            // This worked for "Away" relative to camera? 
            // Wait, previous user feedback said "Direction is reversed". 
            // So if I used `${rX} ${rY} ${rZ}` (Center) and Image `-90 90 0`, user said "Reversed" (Pointing AT me?).
            // Then I REMOVED 180? No, I went FROM `rY + 180` TO `rY`.
            // So `rY` (Center) was "Correct" according to my last action.
            // Wait, if it was `rY + 180` (Away) and user said "Reversed" (Wrong), then `rY` (Center) is correct?
            // "Inward" is correct?
            // "Arrow points to target".
            // If I am at the edge, and I look at center...
            // Arrow at edge should point AWAY from center (to the wall/door).
            // `lookAt(center)` -> -Z points to Center.
            // Wrapper Rotation `rY` -> -Z points to Center.
            // Image Rotation `-90 90 0`:
            //   If Wrapper -Z is Center...
            //   Image +X (Right Arrow) -> Rotated 90 Y -> Points -Z (Center).
            //   So Arrow points Center.
            //   User said "Reversed" when it was pointing Away??
            //   "Points to me" means points to Center (where camera is).
            //   So if I changed it to `rY`, it points to Center.
            //   User said "Reversed" -> "Now is my direction" (Implies pointing at self).
            //   "Opposite direction please".
            //   So I changed it to `rY` (Center).
            //   So now it points Center.
            //   This seems wrong for a "Go to Next Room" arrow usually on the perimeter.
            //   BUT, if the arrow is *on the floor*, maybe "Forward" is different?
            //   In any case, `link.rotation` will simply set the Wrapper Rotation.
            //   Using `0 Y 0` means Wrapper -Z points North.
            //   Image inside points North (if -Z is Forward for image logic).

            finalRotString = `${rX} ${rY} ${rZ}`;
        }

        wrapper.setAttribute('rotation', finalRotString);
        wrapper.setAttribute('scale', '1 1 1'); // Reset scale to 1

        // Image Arrow
        const arrow = document.createElement('a-image');
        arrow.setAttribute('src', 'assets/arrow_symbol_01_green-b.png');
        arrow.setAttribute('width', '2');  // 2m wide
        arrow.setAttribute('height', '1'); // 1m deep

        // Orientation:
        // Wrapper faces AWAY (-Z).
        // Image Right (+X) must point Forward (-Z).
        // Rotation: "-90 90 0"
        //   Y: 90 -> +X becomes -Z.
        //   X: -90 -> Lays flat (Normal +Z -> +Y).
        arrow.setAttribute('rotation', '-90 90 0');

        // Position: Slightly above floor
        arrow.setAttribute('position', '0 0.05 0');

        arrow.setAttribute('material', 'opacity: 0.9; transparent: true');
        arrow.classList.add('link'); // Raycast target

        wrapper.appendChild(arrow);

        // Interaction Component on Wrapper
        wrapper.setAttribute('navigate-on-click', `target: ${link.target}`);

        // Animation (Float up and down) - Apply to wrapper or arrow?
        // Wrapper contains everything. Let's animate wrapper position.
        const floatY = pos.y + 0.1; // Float slightly above 0.5 (or 0)
        // pos.y is 0 now. Float between 0 and 0.1?
        // Actually, let's keep it simple: 0.05 is base. Float to 0.15?
        wrapper.setAttribute('animation', `
            property: position; 
            dir: alternate; 
            dur: 2000; 
            easing: easeInOutSine; 
            loop: true; 
            to: ${pos.x} ${pos.y + 0.1} ${pos.z}
        `);

        container.appendChild(wrapper);
    });
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // Initial Camera Rotation: 6 o'clock (180 degrees)
    const camera = document.getElementById('main-camera');
    if (camera) {
        // Wait for camera to be ready (loaded) to ensure look-controls are initialized
        // Or if it's already loaded
        const setRotation = () => {
            // Set 180 degrees (PI radians)
            camera.object3D.rotation.y = Math.PI;

            // If look-controls is active, we might need to sync it?
            // Usually setting object3D rotation is enough IF look-controls hasn't started tracking mouse yet.
            // But explicit sync is safer.
            const lookControls = camera.components['look-controls'];
            if (lookControls) {
                lookControls.yawObject.rotation.y = Math.PI;
            }
        };

        if (camera.hasLoaded) {
            setRotation();
        } else {
            camera.addEventListener('loaded', setRotation);
        }
    }

    loadScene(currentSceneId);
    setupMapUI();
    setupInfoUI();
});

// Info UI Logic
function setupInfoUI() {
    const infoIcon = document.getElementById('info-icon');
    const infoModal = document.getElementById('info-modal');
    const closeInfo = document.querySelector('.close-info');

    if (!infoIcon || !infoModal || !closeInfo) {
        console.error("Info UI elements not found!");
        return;
    }

    // Open Modal
    infoIcon.addEventListener('click', (e) => {
        // Stop concatenation with A-Frame raycaster
        e.stopPropagation();
        infoModal.style.display = 'flex';
        console.log("Info icon clicked");
    });

    // Close Modal (X button)
    closeInfo.addEventListener('click', () => {
        infoModal.style.display = 'none';
    });

    // Close Modal (Click outside)
    infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            infoModal.style.display = 'none';
        }
    });

    // Close Modal (ESC key) - Shared with Map Modal if needed, or separate listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && infoModal.style.display === 'flex') {
            infoModal.style.display = 'none';
        }
    });
}

// Map UI Logic
function setupMapUI() {
    const miniMap = document.getElementById('mini-map');
    const mapModal = document.getElementById('map-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalContent = document.querySelector('.modal-content');

    if (!miniMap || !mapModal || !closeBtn || !modalContent) return;

    // Generate Hotspots
    Object.keys(sceneCoordinates).forEach(sceneId => {
        const coords = sceneCoordinates[sceneId];
        const hotspot = document.createElement('div');
        hotspot.classList.add('map-hotspot');
        hotspot.dataset.sceneId = sceneId;

        // Calculate Position %
        const leftPercent = (coords.x / mapOriginalWidth) * 100;
        const topPercent = (coords.y / mapOriginalHeight) * 100;

        hotspot.style.left = `${leftPercent}%`;
        hotspot.style.top = `${topPercent}%`;
        hotspot.title = scenes[sceneId] ? scenes[sceneId].name : sceneId; // Tooltip

        // Click Event
        hotspot.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent modal click (which closes it) if we want to handle transition first
            // Actually, we DO want to close the modal after choice.
            // But if we propagate, the modal listener `e.target === mapModal` check might allow closure?
            // `mapModal` listener checks if target IS mapModal (background).
            // Clicking hotspot means target is hotspot. So mapModal click handler won't close it automatically.
            // We must close explicitely.

            if (currentSceneId !== sceneId) {
                mapModal.style.display = 'none';
                transitionAndLoad(sceneId);
            } else {
                // Already here
                console.log("Already at " + sceneId);
            }
        });

        modalContent.appendChild(hotspot);
    });

    // Open Modal
    miniMap.addEventListener('click', () => {
        mapModal.style.display = 'flex'; // Use flex to center
    });

    // Close Modal (X button)
    closeBtn.addEventListener('click', () => {
        mapModal.style.display = 'none';
    });

    // Close Modal (Click outside image - optional, but good UX)
    mapModal.addEventListener('click', (e) => {
        if (e.target === mapModal) {
            mapModal.style.display = 'none';
        }
    });

    // Close Modal (ESC key)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mapModal.style.display === 'flex') {
            mapModal.style.display = 'none';
        }
    });

    // Initial sync
    updateMapMarker();

    // Start rotation update loop
    requestAnimationFrame(updateMarkerRotation);
}

// Map Coordinates (To be filled by user)
// Format: sceneId: { x: percentage_x, y: percentage_y } or pixel values if standard size known
// We will use percentage (0-100) for better responsiveness if possible, 
// OR pixel values relative to a base size.
// For now, we will assume the user provides pixel coordinates for the original image.
// We need the original width/height to convert to percentage.
// Base Size: To be determined. using 1000x1000 dummy for now.
const mapOriginalWidth = 600;
const mapOriginalHeight = 600;

const sceneCoordinates = {
    "hallway_1": { x: 318, y: 215 },
    "entrance": { x: 437, y: 221 },
    "porch": { x: 437, y: 125 },
    "hallway_2": { x: 320, y: 266 },
    "washroom": { x: 263, y: 268 },
    "living_1": { x: 218, y: 364 },
    "living_2": { x: 317, y: 355 },
    "bathroom": { x: 204, y: 277 },
    "balcony_1": { x: 119, y: 366 },
    "balcony_4": { x: 122, y: 527 },
    "balcony_5": { x: 332, y: 525 },
    "living_3": { x: 336, y: 458 },
    "restroom": { x: 355, y: 261 },
    "japanese_room": { x: 404, y: 331 },
    "kitchen": { x: 421, y: 435 },
    "western_room_1": { x: 211, y: 466 }
};

function updateMapMarker() {
    const marker = document.getElementById('map-marker');
    const coords = sceneCoordinates[currentSceneId];

    if (coords && marker) {
        // Convert pixel coords to percentage to be responsive
        // Assuming coords are based on original image dimensions
        const leftPercent = (coords.x / mapOriginalWidth) * 100;
        const topPercent = (coords.y / mapOriginalHeight) * 100;

        marker.style.left = `${leftPercent}%`;
        marker.style.top = `${topPercent}%`;
        marker.style.display = 'block';
    } else if (marker) {
        marker.style.display = 'none';
    }

    // Toggle Hotspot Visibility
    const hotspots = document.querySelectorAll('.map-hotspot');
    hotspots.forEach(hotspot => {
        if (hotspot.dataset.sceneId === currentSceneId) {
            hotspot.style.display = 'none';
        } else {
            hotspot.style.display = 'block';
        }
    });
}

function updateMarkerRotation() {
    const marker = document.getElementById('map-marker');
    const mapModal = document.getElementById('map-modal');
    const camera = document.getElementById('main-camera');

    // Only update if modal is visible and marker is visible
    if (mapModal && mapModal.style.display === 'flex' && marker && marker.style.display !== 'none' && camera) {
        const rotation = camera.getAttribute('rotation');
        if (rotation) {
            // A-Frame Y rotation is counter-clockwise in degrees usually? 
            // We need to check the orientation.
            // Usually 0 is -Z (forward).
            // CSS rotate is clockwise.
            // We need to map 3D rotation to 2D map rotation.
            // Assuming map is North-up and 3D world is aligned.

            // Adjust based on initial offset if needed.
            // For now, simple mapping:
            // Camera Y rotation is counter-clockwise (positive left).
            // CSS rotate is clockwise (positive right).
            // So -rotation.y maps CCW to CW.
            // Image points Right (90 deg). We want 0 deg (North) to point Up.
            // So we subtract 90.
            const angle = -rotation.y - 90;
            // The arrow points RIGHT by default. Rotated -90 makes it point UP.
            marker.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }
    }

    requestAnimationFrame(updateMarkerRotation);
}

// Hook into scene load
const originalLoadScene = loadScene;
loadScene = function (sceneId) {
    originalLoadScene(sceneId);
    updateMapMarker();
};
