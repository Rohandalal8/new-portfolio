import { useGLTF } from "@react-three/drei";
import type { BufferGeometry, MeshStandardMaterial } from "three";
import type { ComponentPropsWithoutRef } from "react";

export function Computer(props: ComponentPropsWithoutRef<"group">) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  const computerDeskNode = nodes.Cube000_ComputerDesk_0001_1 as unknown as {
    geometry: BufferGeometry;
  };

  const computerDeskMaterial =
    materials["ComputerDesk.001"] as MeshStandardMaterial;

  computerDeskMaterial.color.set("#171525");
  computerDeskMaterial.roughness = 0.35;
  computerDeskMaterial.metalness = 0.25;

  const floppyDiskMaterial = materials["FloppyDisk.001"] as MeshStandardMaterial;
  floppyDiskMaterial.color.set("#0B0A12");
  floppyDiskMaterial.roughness = 0.3;
  floppyDiskMaterial.metalness = 0.4;

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={computerDeskNode.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(
            nodes.Cube000_ComputerDesk_0001_2 as unknown as { geometry: BufferGeometry }
          ).geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;