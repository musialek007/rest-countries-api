import styles from './FilterRegion.module.css';

export function FilterRegion({ uniqueCountryRegions, setSelectedRegion }) {
  return (
    <div className={styles.filterBar}>
      <select
        name="region"
        id="region"
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        <option value={""}>All</option>
        {uniqueCountryRegions.map((region) => (
          <option key={region} value={region}>
            {region || "Brak regionu"}
          </option>
        ))}
      </select>
    </div>
  );
}
