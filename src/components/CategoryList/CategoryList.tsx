type CategoryItem = {
    id: string;
    value: string;
    label: string;
    image: string;
}

type CategoryListProps = {
    categories: CategoryItem[];
    totals: Record<string, number>;
    selected: string;
    onSelect: (value: string) => void;
    formatCurrency: (value: number) => string;
    variant: "expense" | "income";
}

export default function CategoryList({ categories, totals, selected, onSelect, formatCurrency, variant }: CategoryListProps) {
  const containerClass = variant === "expense" ? "calc-expenses" : "calc-income";
    const categoryClass = variant === "expense" ? "calc-expenses-img" : "calc-income-img";
    const itemClass = variant === "expense" ? "expense-item" : "income-item";
    return (
      <>
        <div className={containerClass}>
          <div className={categoryClass}>
            {categories.map((item) => (
              <button
                className={`${itemClass} ${item.id === "utility" ? "two-lines" : ""}`}
                key={item.id}
                onClick={() => onSelect(item.value)}
              >
                <p style={{ color: "#52555F" }}>
                  {formatCurrency(totals[item.value] ?? 0)}
                </p>
                <div
                  className={`img-container ${item.value === selected ? "active" : ""}`}
                >
                  <img src={item.image} alt={item.label} className="category-icon" />
                </div>
                <p style={{ color: "#52555F" }}>{item.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* <div className="calc-income">
          <div className="calc-income-img">
            {incomeCategories.map((item) => (
              <button
                className="income-item"
                key={item.id}
                onClick={() => setSelectedIncomeCategory(item.value)}
              >
                <p style={{ color: "#52555F" }}>
                  {formatCurrency(incomeCategoryTotals[item.value] ?? 0)}
                </p>
                <div
                  className={`img-container ${item.value === selectedIncomeCategory ? "active" : ""}`}
                >
                  <img src={item.image} className="category-icon" />
                </div>
                <p style={{ color: "#52555F" }}>{item.label}</p>
              </button>
            ))}
          </div>
        </div> */}
      </>
    );
}
