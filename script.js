// Enhanced Application State for SuperMart POS with all features and proper store info
let appState = {
    currentSection: 'welcome',
    billCounter: 1001,
    categories: [
        { id: 1, name: "Packaged Foods", icon: "🍞", color: "#667eea", description: "Ready-to-eat packaged food items", productCount: 0, createdAt: new Date().toISOString() },
        { id: 2, name: "Fruits", icon: "🍎", color: "#48bb78", description: "Fresh fruits and seasonal produce", productCount: 0, createdAt: new Date().toISOString() },
        { id: 3, name: "Vegetables", icon: "🥕", color: "#38b2ac", description: "Fresh vegetables and leafy greens", productCount: 0, createdAt: new Date().toISOString() },
        { id: 4, name: "Cereals & Grains", icon: "🌾", color: "#ed8936", description: "Rice, wheat, pulses and grains", productCount: 0, createdAt: new Date().toISOString() },
        { id: 5, name: "Dairy", icon: "🥛", color: "#9f7aea", description: "Milk, cheese, yogurt and dairy products", productCount: 0, createdAt: new Date().toISOString() },
        { id: 6, name: "Beverages", icon: "🥤", color: "#e53e3e", description: "Soft drinks, juices and beverages", productCount: 0, createdAt: new Date().toISOString() },
        { id: 7, name: "Snacks", icon: "🍪", color: "#f56565", description: "Chips, cookies and snack items", productCount: 0, createdAt: new Date().toISOString() }
    ],
    products: [
        // Unit-based products (Packaged Foods)
        { 
            id: 1, 
            name: "Lay's Classic Chips", 
            category: "Snacks", 
            pricingType: "unit",
            pricePerUnit: 25, 
            quantity: 50, 
            barcode: "8901030875220", 
            sales: 25,
            description: "50g pack of classic salted chips"
        },
        { 
            id: 2, 
            name: "Coca Cola 500ml", 
            category: "Beverages", 
            pricingType: "unit",
            pricePerUnit: 40, 
            quantity: 30, 
            barcode: "8901030875221", 
            sales: 18,
            description: "500ml chilled soft drink"
        },
        { 
            id: 3, 
            name: "Maggi Noodles 2-Minute", 
            category: "Packaged Foods", 
            pricingType: "unit",
            pricePerUnit: 15, 
            quantity: 75, 
            barcode: "8901030875222", 
            sales: 45,
            description: "70g masala flavor instant noodles"
        },
        { 
            id: 4, 
            name: "Amul Fresh Milk", 
            category: "Dairy", 
            pricingType: "unit",
            pricePerUnit: 28, 
            quantity: 25, 
            barcode: "8901030875227", 
            sales: 35,
            description: "500ml fresh toned milk"
        },
        
        // Weight-based products (Fresh Produce & Bulk Items)
        { 
            id: 5, 
            name: "Fresh Red Apples", 
            category: "Fruits", 
            pricingType: "weight",
            pricePerKg: 120, 
            weightInStock: 25.5, 
            barcode: "8901030875223", 
            sales: 12.3,
            description: "Premium quality Kashmir apples"
        },
        { 
            id: 6, 
            name: "Basmati Rice Premium", 
            category: "Cereals & Grains", 
            pricingType: "weight",
            pricePerKg: 80, 
            weightInStock: 100.0, 
            barcode: "8901030875224", 
            sales: 45.2,
            description: "Long grain aromatic basmati rice"
        },
        { 
            id: 7, 
            name: "Fresh Tomatoes", 
            category: "Vegetables", 
            pricingType: "weight",
            pricePerKg: 60, 
            weightInStock: 15.8, 
            barcode: "8901030875225", 
            sales: 18.7,
            description: "Fresh farm tomatoes"
        },
        { 
            id: 8, 
            name: "Premium Cashew Nuts", 
            category: "Cereals & Grains", 
            pricingType: "weight",
            pricePerKg: 800, 
            weightInStock: 5.2, 
            barcode: "8901030875226", 
            sales: 2.8,
            description: "Whole cashew nuts - premium grade"
        },
        { 
            id: 9, 
            name: "Green Bananas", 
            category: "Fruits", 
            pricingType: "weight",
            pricePerKg: 40, 
            weightInStock: 20.0, 
            barcode: "8901030875228", 
            sales: 15.5,
            description: "Fresh green bananas"
        },
        { 
            id: 10, 
            name: "Onions", 
            category: "Vegetables", 
            pricingType: "weight",
            pricePerKg: 35, 
            weightInStock: 50.0, 
            barcode: "8901030875229", 
            sales: 28.3,
            description: "Fresh red onions"
        }
    ],
    customers: [
        { id: 1, name: "Rajesh Kumar", phone: "9876543210", email: "rajesh@email.com", address: "123 MG Road, Delhi", totalPurchases: 15000 },
        { id: 2, name: "Priya Sharma", phone: "9876543211", email: "priya@email.com", address: "456 Brigade Road, Mumbai", totalPurchases: 25000 },
        { id: 3, name: "Amit Singh", phone: "9876543212", email: "amit@email.com", address: "789 Commercial Street, Bangalore", totalPurchases: 8000 },
        { id: 4, name: "Sunita Patel", phone: "9876543213", email: "sunita@email.com", address: "321 FC Road, Pune", totalPurchases: 12500 }
    ],
    sales: [],
    currentBill: {
        customerId: null,
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0
    },
    selectedWeightProduct: null,
    // Enhanced UPI Settings with complete store information
    upiSettings: {
        storeUpiId: 'yourstore@paytm',
        storeName: 'Your Store Name',
        storeAddress: 'Your Complete Store Address, City, State - PIN',
        storePhone: '+91-XXXXXXXXXX',
        storeEmail: 'yourstore@email.com',
        storeWebsite: 'www.yourstore.com',
        gstNumber: 'XXXXXXXXXXXX',
        fssaiLicense: 'XXXXXXXXXXXXXX',
        storeTagline: 'Your Neighborhood Supermarket',
        storeOwner: 'Store Owner Name',
        businessHours: '9:00 AM - 10:00 PM'
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏪 SuperMart POS System Loaded Successfully!');
    loadInitialData();
    setupEventListeners();
    updateBillNumber();
});

// Section Navigation
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section, .hero').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        appState.currentSection = sectionName;
        
        // Load section-specific data
        switch(sectionName) {
            case 'dashboard':
                loadDashboard();
                break;
            case 'inventory':
                loadInventory();
                break;
            case 'billing':
                loadBilling();
                break;
            case 'customers':
                loadCustomers();
                break;
            case 'categories':
                loadCategories();
                break;
            case 'reports':
                loadReports();
                break;
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Dashboard Functions
function loadDashboard() {
    updateDashboardStats();
    animateNumbers();
}

function updateDashboardStats() {
    const todaySales = appState.sales.reduce((total, sale) => total + sale.total, 0);
    const productCount = appState.products.length;
    const customerCount = appState.customers.length;
    const lowStockCount = getLowStockCount();

    // Update dashboard cards
    document.getElementById('todaySales').textContent = `₹${todaySales.toLocaleString()}`;
    document.getElementById('productCount').textContent = productCount;
    document.getElementById('customerCount').textContent = customerCount;
    document.getElementById('lowStockAlerts').textContent = lowStockCount;
}

function getLowStockCount() {
    return appState.products.filter(product => {
        if (product.pricingType === 'unit') {
            return product.quantity < 10;
        } else {
            return product.weightInStock < 1.0;
        }
    }).length;
}

function animateNumbers() {
    const elements = ['todaySales', 'productCount', 'customerCount', 'lowStockAlerts'];
    elements.forEach(elementId => {
        const element = document.getElementById(elementId);
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'all 0.6s ease';
        }, 200);
    });
}

function refreshDashboard() {
    loadDashboard();
    showNotification('📊 Dashboard refreshed successfully!', 'success');
}

// Enhanced Inventory Management
function loadInventory() {
    displayProducts();
    populateCustomerSelect();
}

function displayProducts(productsToShow = appState.products) {
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = '';

    if (productsToShow.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 3rem; color: #666;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">📦</div>
                    <div>No products found</div>
                    <small>Try adjusting your search or filters</small>
                </td>
            </tr>
        `;
        return;
    }

    productsToShow.forEach(product => {
        const row = document.createElement('tr');
        
        let stockStatus = 'stock-good';
        let statusText = 'In Stock';
        let stockInfo = '';
        let priceInfo = '';
        
        if (product.pricingType === 'unit') {
            stockInfo = `
                <div class="stock-info">
                    <span class="stock-quantity">${product.quantity} units</span>
                    <span style="font-size: 0.8rem; color: #666;">Unit-based</span>
                </div>
            `;
            priceInfo = `<span class="price-per-unit">₹${product.pricePerUnit}/unit</span>`;
            
            if (product.quantity === 0) {
                stockStatus = 'stock-out';
                statusText = 'Out of Stock';
            } else if (product.quantity < 10) {
                stockStatus = 'stock-low';
                statusText = 'Low Stock';
            }
        } else {
            stockInfo = `
                <div class="stock-info">
                    <span class="stock-quantity">${product.weightInStock} kg</span>
                    <span style="font-size: 0.8rem; color: #666;">Weight-based</span>
                </div>
            `;
            priceInfo = `<span class="price-per-kg">₹${product.pricePerKg}/kg</span>`;
            
            if (product.weightInStock === 0) {
                stockStatus = 'stock-out';
                statusText = 'Out of Stock';
            } else if (product.weightInStock < 1) {
                stockStatus = 'stock-low';
                statusText = 'Low Stock';
            }
        }

        row.innerHTML = `
            <td><strong>#${product.id}</strong></td>
            <td>
                <div style="margin-bottom: 0.5rem;">
                    <strong style="color: #333; font-size: 1rem;">${product.name}</strong>
                </div>
                <div style="font-size: 0.85rem; color: #666; line-height: 1.4;">
                    ${product.description || 'No description'}
                </div>
            </td>
            <td>
                <span style="background: #e2e8f0; color: #4a5568; padding: 0.3rem 0.6rem; border-radius: 12px; font-size: 0.8rem; font-weight: 500;">
                    ${product.category}
                </span>
            </td>
            <td class="pricing-info">${priceInfo}</td>
            <td>${stockInfo}</td>
            <td><span class="stock-status ${stockStatus}">${statusText}</span></td>
            <td>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="secondary-btn" onclick="editProduct(${product.id})" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Edit</button>
                    <button class="remove-item-btn" onclick="deleteProduct(${product.id})" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Delete</button>
                </div>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function searchProducts() {
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const pricingType = document.getElementById('pricingTypeFilter').value;
    
    let filteredProducts = appState.products.filter(product => {
        const matchesSearch = !searchTerm || 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.barcode.includes(searchTerm);
        
        const matchesCategory = !category || product.category === category;
        const matchesPricingType = !pricingType || product.pricingType === pricingType;
        
        return matchesSearch && matchesCategory && matchesPricingType;
    });
    
    displayProducts(filteredProducts);
}

function filterByCategory() {
    searchProducts();
}

function filterByPricingType() {
    searchProducts();
}

// Product Management Functions
function showAddProductForm() {
    document.getElementById('addProductModal').classList.remove('hidden');
    document.querySelector('input[name="pricingType"][value="unit"]').checked = true;
    togglePricingFields();
}

function togglePricingFields() {
    const pricingType = document.querySelector('input[name="pricingType"]:checked').value;
    const unitFields = document.getElementById('unitPricingFields');
    const weightFields = document.getElementById('weightPricingFields');
    
    if (pricingType === 'unit') {
        unitFields.classList.remove('hidden');
        weightFields.classList.add('hidden');
        
        document.getElementById('productPricePerUnit').required = true;
        document.getElementById('productQuantity').required = true;
        document.getElementById('productPricePerKg').required = false;
        document.getElementById('productWeightInStock').required = false;
    } else {
        unitFields.classList.add('hidden');
        weightFields.classList.remove('hidden');
        
        document.getElementById('productPricePerUnit').required = false;
        document.getElementById('productQuantity').required = false;
        document.getElementById('productPricePerKg').required = true;
        document.getElementById('productWeightInStock').required = true;
    }
}

function addProduct(event) {
    event.preventDefault();
    
    const name = document.getElementById('productName').value.trim();
    const category = document.getElementById('productCategory').value;
    const pricingType = document.querySelector('input[name="pricingType"]:checked').value;
    const barcode = document.getElementById('productBarcode').value.trim() || generateBarcode();
    const description = document.getElementById('productDescription').value.trim();
    
    const existingProduct = appState.products.find(p => p.barcode === barcode);
    if (existingProduct) {
        showNotification('Barcode already exists! Please use a different barcode.', 'error');
        return;
    }
    
    let newProduct = {
        id: Date.now(),
        name,
        category,
        pricingType,
        barcode,
        sales: 0,
        description
    };
    
    if (pricingType === 'unit') {
        const pricePerUnit = parseFloat(document.getElementById('productPricePerUnit').value);
        const quantity = parseInt(document.getElementById('productQuantity').value);
        
        if (pricePerUnit <= 0 || quantity < 0) {
            showNotification('Please enter valid price and quantity values!', 'error');
            return;
        }
        
        newProduct.pricePerUnit = pricePerUnit;
        newProduct.quantity = quantity;
    } else {
        const pricePerKg = parseFloat(document.getElementById('productPricePerKg').value);
        const weightInStock = parseFloat(document.getElementById('productWeightInStock').value);
        
        if (pricePerKg <= 0 || weightInStock < 0) {
            showNotification('Please enter valid price and weight values!', 'error');
            return;
        }
        
        newProduct.pricePerKg = pricePerKg;
        newProduct.weightInStock = weightInStock;
    }
    
    appState.products.push(newProduct);
    displayProducts();
    closeModal('addProductModal');
    document.getElementById('addProductForm').reset();
    togglePricingFields();
    
    const productType = pricingType === 'unit' ? 'unit-based' : 'weight-based';
    showNotification(`✅ ${productType} product "${name}" added successfully!`, 'success');
}

function editProduct(productId) {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return;
    
    const actionType = prompt(`Edit ${product.name}:\n\n1. Update Stock/Weight\n2. Update Price\n3. Update Details\n\nEnter 1, 2, or 3:`);
    
    switch(actionType) {
        case '1':
            editProductStock(product);
            break;
        case '2':
            editProductPrice(product);
            break;
        case '3':
            editProductDetails(product);
            break;
        default:
            showNotification('Invalid option selected!', 'error');
    }
}

function editProductStock(product) {
    if (product.pricingType === 'unit') {
        const newQuantity = prompt(`Update quantity for ${product.name}:\nCurrent: ${product.quantity} units`, product.quantity);
        if (newQuantity !== null && !isNaN(newQuantity) && parseInt(newQuantity) >= 0) {
            product.quantity = parseInt(newQuantity);
            displayProducts();
            showNotification(`Stock updated for ${product.name}!`, 'success');
        }
    } else {
        const newWeight = prompt(`Update weight for ${product.name}:\nCurrent: ${product.weightInStock} kg`, product.weightInStock);
        if (newWeight !== null && !isNaN(newWeight) && parseFloat(newWeight) >= 0) {
            product.weightInStock = parseFloat(newWeight);
            displayProducts();
            showNotification(`Weight updated for ${product.name}!`, 'success');
        }
    }
}

function editProductPrice(product) {
    if (product.pricingType === 'unit') {
        const newPrice = prompt(`Update price per unit for ${product.name}:\nCurrent: ₹${product.pricePerUnit}`, product.pricePerUnit);
        if (newPrice !== null && !isNaN(newPrice) && parseFloat(newPrice) > 0) {
            product.pricePerUnit = parseFloat(newPrice);
            displayProducts();
            showNotification(`Price updated for ${product.name}!`, 'success');
        }
    } else {
        const newPrice = prompt(`Update price per kg for ${product.name}:\nCurrent: ₹${product.pricePerKg}`, product.pricePerKg);
        if (newPrice !== null && !isNaN(newPrice) && parseFloat(newPrice) > 0) {
            product.pricePerKg = parseFloat(newPrice);
            displayProducts();
            showNotification(`Price updated for ${product.name}!`, 'success');
        }
    }
}

function editProductDetails(product) {
    const newName = prompt(`Update name for ${product.name}:`, product.name);
    if (newName !== null && newName.trim()) {
        product.name = newName.trim();
        displayProducts();
        showNotification(`Product name updated!`, 'success');
    }
}

function deleteProduct(productId) {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return;
    
    const confirmDelete = confirm(`Are you sure you want to delete "${product.name}"?\n\nThis action cannot be undone.`);
    if (confirmDelete) {
        appState.products = appState.products.filter(p => p.id !== productId);
        displayProducts();
        showNotification(`🗑️ Product "${product.name}" deleted successfully!`, 'success');
    }
}

function generateBarcode() {
    return '890' + Date.now().toString().slice(-10);
}

// Enhanced Billing Functions
function loadBilling() {
    populateCustomerSelect();
    clearBill();
    updateBillNumber();
}

function updateBillNumber() {
    document.getElementById('billNumber').textContent = appState.billCounter;
}

function populateCustomerSelect() {
    const customerSelect = document.getElementById('customerSelect');
    customerSelect.innerHTML = '<option value="">Walk-in Customer</option>';
    
    appState.customers.forEach(customer => {
        const option = document.createElement('option');
        option.value = customer.id;
        option.textContent = `${customer.name} - ${customer.phone}`;
        customerSelect.appendChild(option);
    });
}

function selectCustomer() {
    const customerId = document.getElementById('customerSelect').value;
    appState.currentBill.customerId = parseInt(customerId) || null;
    
    const customerName = customerId ? 
        appState.customers.find(c => c.id == customerId)?.name || 'Unknown' : 
        'Walk-in Customer';
    
    showNotification(`Customer selected: ${customerName}`, 'info');
}

function searchProductsForBilling() {
    const searchTerm = document.getElementById('billingProductSearch').value.toLowerCase().trim();
    const suggestionsDiv = document.getElementById('productSuggestions');
    
    if (searchTerm.length < 2) {
        suggestionsDiv.innerHTML = '';
        return;
    }
    
    const matchingProducts = appState.products.filter(product => {
        const isAvailable = product.pricingType === 'unit' ? 
            product.quantity > 0 : 
            product.weightInStock > 0;
            
        return isAvailable && (
            product.name.toLowerCase().includes(searchTerm) ||
            product.barcode.includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }).slice(0, 6);
    
    suggestionsDiv.innerHTML = '';
    
    if (matchingProducts.length === 0) {
        suggestionsDiv.innerHTML = `
            <div class="suggestion-item" style="text-align: center; color: #666;">
                <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</div>
                <div>No products found</div>
                <small>Try different keywords</small>
            </div>
        `;
        return;
    }
    
    matchingProducts.forEach(product => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        
        let priceDisplay = '';
        let stockDisplay = '';
        
        if (product.pricingType === 'unit') {
            priceDisplay = `₹${product.pricePerUnit}/unit`;
            stockDisplay = `${product.quantity} units available`;
        } else {
            priceDisplay = `₹${product.pricePerKg}/kg`;
            stockDisplay = `${product.weightInStock} kg available`;
        }
        
        suggestionItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="flex: 1;">
                    <div style="font-weight: bold; color: #333; margin-bottom: 0.3rem;">
                        ${product.name}
                    </div>
                    <div style="font-size: 0.8rem; color: #666; margin-bottom: 0.3rem;">
                        ${product.category} • ${priceDisplay}
                    </div>
                    <div style="font-size: 0.8rem; color: #48bb78; font-weight: 500;">
                        ${stockDisplay}
                    </div>
                </div>
                <span class="item-type ${product.pricingType}" style="margin-left: 1rem;">
                    ${product.pricingType === 'unit' ? '📦 UNIT' : '⚖️ WEIGHT'}
                </span>
            </div>
        `;
        
        suggestionItem.onclick = () => selectProductForBilling(product);
        suggestionsDiv.appendChild(suggestionItem);
    });
}

function selectProductForBilling(product) {
    if (product.pricingType === 'unit') {
        addProductToBill(product);
    } else {
        showWeightInput(product);
    }
    
    document.getElementById('billingProductSearch').value = '';
    document.getElementById('productSuggestions').innerHTML = '';
}

function showWeightInput(product) {
    appState.selectedWeightProduct = product;
    
    document.getElementById('weightInputSection').classList.remove('hidden');
    
    document.getElementById('selectedProductInfo').innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h4 style="margin: 0; color: #333; font-size: 1.3rem;">${product.name}</h4>
                <p style="margin: 0.5rem 0; color: #666; font-weight: 500;">${product.category}</p>
                <p style="margin: 0; font-size: 0.9rem; color: #777; font-style: italic;">${product.description}</p>
            </div>
            <div style="text-align: right;">
                <div style="font-size: 1.4rem; font-weight: bold; color: #48bb78;">₹${product.pricePerKg}/kg</div>
                <div style="font-size: 0.9rem; color: #666;">Available: ${product.weightInStock} kg</div>
            </div>
        </div>
    `;
    
    document.getElementById('weightInput').value = '';
    document.getElementById('weightUnit').value = 'grams';
    document.getElementById('weightBasedPrice').textContent = '₹0.00';
    document.getElementById('weightBasedPrice').style.color = '#48bb78';
    
    document.getElementById('weightInput').focus();
}

function calculateWeightPrice() {
    if (!appState.selectedWeightProduct) return;
    
    const weightInput = parseFloat(document.getElementById('weightInput').value) || 0;
    const weightUnit = document.getElementById('weightUnit').value;
    const product = appState.selectedWeightProduct;
    
    if (weightInput <= 0) {
        document.getElementById('weightBasedPrice').textContent = '₹0.00';
        document.getElementById('weightBasedPrice').style.color = '#48bb78';
        return;
    }
    
    let weightInKg = weightUnit === 'kg' ? weightInput : weightInput / 1000;
    
    if (weightInKg > product.weightInStock) {
        document.getElementById('weightBasedPrice').textContent = `⚠️ Exceeds stock (${product.weightInStock} kg available)`;
        document.getElementById('weightBasedPrice').style.color = '#e53e3e';
        return;
    }
    
    const totalPrice = weightInKg * product.pricePerKg;
    document.getElementById('weightBasedPrice').textContent = `₹${totalPrice.toFixed(2)}`;
    document.getElementById('weightBasedPrice').style.color = '#48bb78';
}

function addWeightBasedProductToBill() {
    if (!appState.selectedWeightProduct) return;
    
    const weightInput = parseFloat(document.getElementById('weightInput').value) || 0;
    const weightUnit = document.getElementById('weightUnit').value;
    const product = appState.selectedWeightProduct;
    
    if (weightInput <= 0) {
        showNotification('⚖️ Please enter a valid weight!', 'error');
        return;
    }
    
    let weightInKg = weightUnit === 'kg' ? weightInput : weightInput / 1000;
    
    if (weightInKg > product.weightInStock) {
        showNotification('⚠️ Weight exceeds available stock!', 'error');
        return;
    }
    
    const totalPrice = weightInKg * product.pricePerKg;
    
    appState.currentBill.items.push({
        productId: product.id,
        name: product.name,
        pricingType: 'weight',
        pricePerKg: product.pricePerKg,
        weightInKg: weightInKg,
        displayWeight: `${weightInput} ${weightUnit}`,
        totalPrice: totalPrice
    });
    
    updateBillDisplay();
    cancelWeightInput();
    showNotification(`✅ Added ${product.name} (${weightInput} ${weightUnit}) - ₹${totalPrice.toFixed(2)}`, 'success');
}

function cancelWeightInput() {
    document.getElementById('weightInputSection').classList.add('hidden');
    appState.selectedWeightProduct = null;
}

function addProductToBill(product) {
    if (product.pricingType === 'unit') {
        if (product.quantity === 0) {
            showNotification('❌ Product is out of stock!', 'error');
            return;
        }
        
        const existingItem = appState.currentBill.items.find(item => 
            item.productId === product.id && item.pricingType === 'unit'
        );
        
        if (existingItem) {
            if (existingItem.quantity < product.quantity) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.quantity * existingItem.pricePerUnit;
            } else {
                showNotification('⚠️ Cannot add more items than available in stock!', 'error');
                return;
            }
        } else {
            appState.currentBill.items.push({
                productId: product.id,
                name: product.name,
                pricingType: 'unit',
                pricePerUnit: product.pricePerUnit,
                quantity: 1,
                totalPrice: product.pricePerUnit
            });
        }
        
        updateBillDisplay();
        showNotification(`✅ Added ${product.name} to bill - ₹${product.pricePerUnit}`, 'success');
    }
}

function updateBillDisplay() {
    const billItemsDiv = document.getElementById('billItems');
    
    if (appState.currentBill.items.length === 0) {
        billItemsDiv.innerHTML = `
            <div class="empty-bill">
                <div class="empty-icon">🛒</div>
                <p>No items added yet</p>
                <small>Search and add products to start billing</small>
            </div>
        `;
    } else {
        billItemsDiv.innerHTML = '';
        
        appState.currentBill.items.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'bill-item';
            
            let itemContent = '';
            
            if (item.pricingType === 'unit') {
                itemContent = `
                    <div class="bill-item-header">
                        <div>
                            <div class="item-name">${item.name}</div>
                            <span class="item-type unit">📦 UNIT</span>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 1.2rem; font-weight: bold; color: #333;">₹${item.totalPrice.toFixed(2)}</div>
                        </div>
                    </div>
                    <div class="item-details">
                        <div>₹${item.pricePerUnit} × ${item.quantity} units</div>
                        <div class="bill-item-actions">
                            <button class="quantity-btn" onclick="changeQuantity(${index}, -1)" title="Decrease quantity">-</button>
                            <span style="margin: 0 0.8rem; font-weight: bold; color: #333;">${item.quantity}</span>
                            <button class="quantity-btn" onclick="changeQuantity(${index}, 1)" title="Increase quantity">+</button>
                            <button class="remove-item-btn" onclick="removeFromBill(${index})" title="Remove item">Remove</button>
                        </div>
                    </div>
                `;
            } else {
                itemContent = `
                    <div class="bill-item-header">
                        <div>
                            <div class="item-name">${item.name}</div>
                            <span class="item-type weight">⚖️ WEIGHT</span>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 1.2rem; font-weight: bold; color: #333;">₹${item.totalPrice.toFixed(2)}</div>
                        </div>
                    </div>
                    <div class="item-details">
                        <div>
                            <div>₹${item.pricePerKg}/kg × ${item.weightInKg.toFixed(3)} kg</div>
                            <span class="weight-info">${item.displayWeight}</span>
                        </div>
                        <div>
                            <button class="remove-item-btn" onclick="removeFromBill(${index})" title="Remove item">Remove</button>
                        </div>
                    </div>
                `;
            }
            
            itemDiv.innerHTML = itemContent;
            billItemsDiv.appendChild(itemDiv);
        });
    }
    
    calculateBillTotals();
}

function changeQuantity(itemIndex, change) {
    const item = appState.currentBill.items[itemIndex];
    
    if (item.pricingType === 'unit') {
        const product = appState.products.find(p => p.id === item.productId);
        const newQuantity = item.quantity + change;
        
        if (newQuantity <= 0) {
            removeFromBill(itemIndex);
            return;
        }
        
        if (newQuantity > product.quantity) {
            showNotification('⚠️ Cannot exceed available stock!', 'error');
            return;
        }
        
        item.quantity = newQuantity;
        item.totalPrice = item.quantity * item.pricePerUnit;
        updateBillDisplay();
    }
}

function removeFromBill(itemIndex) {
    const item = appState.currentBill.items[itemIndex];
    appState.currentBill.items.splice(itemIndex, 1);
    updateBillDisplay();
    showNotification(`🗑️ Removed ${item.name} from bill`, 'info');
}

function calculateBillTotals() {
    const subtotal = appState.currentBill.items.reduce((total, item) => total + item.totalPrice, 0);
    const tax = subtotal * 0.05; // 5% GST for grocery items
    const total = subtotal + tax;
    
    appState.currentBill.subtotal = subtotal;
    appState.currentBill.tax = tax;
    appState.currentBill.total = total;
    
    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('taxAmount').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('finalTotal').textContent = `₹${total.toFixed(2)}`;
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (appState.currentBill.items.length > 0) {
        checkoutBtn.textContent = `💳 Complete Sale - ₹${total.toFixed(2)}`;
        checkoutBtn.disabled = false;
    } else {
        checkoutBtn.textContent = '💳 Complete Sale - ₹0.00';
        checkoutBtn.disabled = true;
    }
}

// UPI and Receipt Functions
function toggleUPISettings() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const upiSettings = document.getElementById('upiSettings');
    
    if (paymentMethod === 'upi') {
        upiSettings.classList.remove('hidden');
    } else {
        upiSettings.classList.add('hidden');
    }
}

// Enhanced processSale function with PDF and UPI QR
function processSale() {
    if (appState.currentBill.items.length === 0) {
        showNotification('🛒 Please add items to the bill!', 'error');
        return;
    }
    
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    // Get receipt options
    const generatePDF = document.getElementById('generatePDF').checked;
    const includeQR = document.getElementById('includeQR').checked;
    const emailReceipt = document.getElementById('emailReceipt').checked;
    
    // Update UPI settings from form
    appState.upiSettings.storeUpiId = document.getElementById('storeUpiId').value || appState.upiSettings.storeUpiId;
    appState.upiSettings.storeName = document.getElementById('storeName').value || appState.upiSettings.storeName;
    
    // Update product stock/weight
    appState.currentBill.items.forEach(item => {
        const product = appState.products.find(p => p.id === item.productId);
        if (product) {
            if (item.pricingType === 'unit') {
                product.quantity -= item.quantity;
                product.sales = (product.sales || 0) + item.quantity;
            } else {
                product.weightInStock = Math.max(0, product.weightInStock - item.weightInKg);
                product.sales = (product.sales || 0) + item.weightInKg;
            }
        }
    });
    
    // Create sale record
    const newSale = {
        id: appState.billCounter,
        customerId: appState.currentBill.customerId,
        items: [...appState.currentBill.items],
        subtotal: appState.currentBill.subtotal,
        tax: appState.currentBill.tax,
        total: appState.currentBill.total,
        paymentMethod: paymentMethod,
        date: new Date().toISOString().split('T')[0],
        timestamp: new Date().toISOString(),
        receiptOptions: {
            generatePDF,
            includeQR,
            emailReceipt
        }
    };
    
    appState.sales.push(newSale);
    
    // Update customer purchases
    if (appState.currentBill.customerId) {
        const customer = appState.customers.find(c => c.id === appState.currentBill.customerId);
        if (customer) {
            customer.totalPurchases = (customer.totalPurchases || 0) + appState.currentBill.total;
        }
    }
    
    const customerName = appState.currentBill.customerId ? 
        appState.customers.find(c => c.id === appState.currentBill.customerId)?.name || 'Unknown' : 
        'Walk-in Customer';
    
    showNotification(`🎉 Sale completed successfully!\nBill #${appState.billCounter} - ₹${appState.currentBill.total.toFixed(2)}\nCustomer: ${customerName}`, 'success');
    
    // Generate receipt based on options
    if (generatePDF) {
        generatePDFReceipt(newSale);
    } else {
        generateTextReceipt(newSale);
    }
    
    // Clear bill and increment counter
    clearBill();
    appState.billCounter++;
    updateBillNumber();
    
    // Save data
    saveDataToStorage();
}

// Enhanced PDF Receipt Generation with complete store information
async function generatePDFReceipt(sale) {
    try {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();
        
        const customer = appState.customers.find(c => c.id === sale.customerId);
        const receiptDate = new Date(sale.timestamp).toLocaleDateString();
        const receiptTime = new Date(sale.timestamp).toLocaleTimeString();
        const settings = appState.upiSettings;
        
        // Set font
        pdf.setFont('helvetica');
        
        // Header with store branding
        pdf.setFontSize(22);
        pdf.setTextColor(0, 102, 204);
        pdf.text(`🏪 ${settings.storeName.toUpperCase()}`, 20, 20);
        
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);
        pdf.text(settings.storeTagline, 20, 30);
        
        // Store Information
        let yPos = 40;
        pdf.setFontSize(10);
        pdf.text(`Address: ${settings.storeAddress}`, 20, yPos);
        yPos += 5;
        pdf.text(`Phone: ${settings.storePhone}`, 20, yPos);
        yPos += 5;
        if (settings.storeEmail) {
            pdf.text(`Email: ${settings.storeEmail}`, 20, yPos);
            yPos += 5;
        }
        if (settings.storeWebsite) {
            pdf.text(`Website: ${settings.storeWebsite}`, 20, yPos);
            yPos += 5;
        }
        
        // License Information
        if (settings.gstNumber) {
            pdf.text(`GST No: ${settings.gstNumber}`, 20, yPos);
            yPos += 5;
        }
        if (settings.fssaiLicense) {
            pdf.text(`FSSAI License: ${settings.fssaiLicense}`, 20, yPos);
            yPos += 5;
        }
        
        // Receipt details
        yPos += 10;
        pdf.setFontSize(16);
        pdf.setTextColor(51, 51, 51);
        pdf.text(`RECEIPT #${sale.id}`, 20, yPos);
        
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);
        yPos += 8;
        pdf.text(`Date: ${receiptDate} | Time: ${receiptTime}`, 20, yPos);
        
        // Customer info
        yPos += 15;
        pdf.setFontSize(11);
        pdf.text(`Customer: ${customer ? customer.name : 'Walk-in Customer'}`, 20, yPos);
        if (customer && customer.phone) {
            yPos += 7;
            pdf.text(`Phone: ${customer.phone}`, 20, yPos);
        }
        if (customer && customer.email) {
            yPos += 7;
            pdf.text(`Email: ${customer.email}`, 20, yPos);
        }
        
        // Items header
        yPos += 15;
        pdf.setFontSize(12);
        pdf.setTextColor(0, 102, 204);
        pdf.text('ITEMS PURCHASED:', 20, yPos);
        
        // Draw line
        yPos += 5;
        pdf.setLineWidth(0.5);
        pdf.line(20, yPos, 190, yPos);
        
        // Items
        yPos += 10;
        pdf.setFontSize(9);
        pdf.setTextColor(0, 0, 0);
        
        sale.items.forEach((item, index) => {
            if (yPos > 250) { // Check if we need a new page
                pdf.addPage();
                yPos = 20;
            }
            
            pdf.text(`${index + 1}. ${item.name}`, 20, yPos);
            yPos += 5;
            
            if (item.pricingType === 'unit') {
                pdf.text(`   📦 ${item.quantity} units × ₹${item.pricePerUnit} = ₹${item.totalPrice.toFixed(2)}`, 25, yPos);
            } else {
                pdf.text(`   ⚖️ ${item.displayWeight} × ₹${item.pricePerKg}/kg = ₹${item.totalPrice.toFixed(2)}`, 25, yPos);
            }
            yPos += 10;
        });
        
        // Totals section
        yPos += 10;
        pdf.line(20, yPos, 190, yPos);
        yPos += 10;
        
        pdf.setFontSize(10);
        pdf.text(`Subtotal: ₹${sale.subtotal.toFixed(2)}`, 120, yPos);
        yPos += 7;
        pdf.text(`CGST (2.5%): ₹${(sale.tax/2).toFixed(2)}`, 120, yPos);
        yPos += 7;
        pdf.text(`SGST (2.5%): ₹${(sale.tax/2).toFixed(2)}`, 120, yPos);
        yPos += 7;
        pdf.line(120, yPos, 190, yPos);
        yPos += 7;
        
        pdf.setFontSize(14);
        pdf.setTextColor(0, 102, 204);
        pdf.text(`TOTAL: ₹${sale.total.toFixed(2)}`, 120, yPos);
        
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);
        yPos += 10;
        pdf.text(`Payment Method: ${sale.paymentMethod.toUpperCase()}`, 120, yPos);
        
        // Add QR Code if UPI payment and option is selected
        if (sale.receiptOptions.includeQR && (sale.paymentMethod === 'upi' || document.getElementById('includeQR').checked)) {
            yPos += 15;
            await addUPIQRCodeToPDF(pdf, sale, yPos);
            yPos += 80; // Space for QR code
        }
        
        // Enhanced Footer
        yPos += 20;
        if (yPos > 270) {
            pdf.addPage();
            yPos = 20;
        }
        
        pdf.setFontSize(10);
        pdf.setTextColor(102, 102, 102);
        pdf.text(`Thank you for shopping with ${settings.storeName}!`, 20, yPos);
        yPos += 7;
        pdf.text('Visit us again for fresh products and great deals!', 20, yPos);
        yPos += 7;
        if (settings.businessHours) {
            pdf.text(`Store Hours: ${settings.businessHours}`, 20, yPos);
            yPos += 7;
        }
        pdf.text('Follow us on social media for daily offers!', 20, yPos);
        
        // Owner signature line
        if (settings.storeOwner) {
            yPos += 15;
            pdf.setFontSize(8);
            pdf.text('_________________________', 140, yPos);
            yPos += 5;
            pdf.text(`${settings.storeOwner}`, 140, yPos);
            yPos += 3;
            pdf.text('Store Manager/Owner', 140, yPos);
        }
        
        // Save and download PDF
        const pdfName = `Receipt_${settings.storeName.replace(/\s+/g, '_')}_${sale.id}_${receiptDate.replace(/\//g, '-')}.pdf`;
        pdf.save(pdfName);
        
        showNotification(`📄 PDF Receipt generated successfully!\nSaved as: ${pdfName}`, 'success');
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        showNotification('❌ Error generating PDF receipt! Falling back to text receipt.', 'error');
        generateTextReceipt(sale);
    }
}

// Enhanced UPI QR Code generation
async function addUPIQRCodeToPDF(pdf, sale, yPos) {
    try {
        const upiUrl = createUPIUrl(sale.total);
        
        const qrCodeDataUrl = await QRCode.toDataURL(upiUrl, {
            width: 150,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        });
        
        pdf.setFontSize(12);
        pdf.setTextColor(0, 102, 204);
        pdf.text('📱 SCAN TO PAY WITH UPI', 20, yPos);
        
        // Add QR code
        pdf.addImage(qrCodeDataUrl, 'PNG', 20, yPos + 5, 50, 50);
        
        // QR code details
        pdf.setFontSize(9);
        pdf.setTextColor(0, 0, 0);
        pdf.text(`UPI ID: ${appState.upiSettings.storeUpiId}`, 80, yPos + 15);
        pdf.text(`Amount: ₹${sale.total.toFixed(2)}`, 80, yPos + 25);
        pdf.text(`Merchant: ${appState.upiSettings.storeName}`, 80, yPos + 35);
        
        // Instructions
        pdf.setFontSize(8);
        pdf.setTextColor(102, 102, 102);
        pdf.text('• Scan QR with any UPI app (PhonePe, GPay, Paytm)', 80, yPos + 45);
        pdf.text('• Verify amount and merchant name before payment', 80, yPos + 50);
        pdf.text('• Complete payment and show confirmation', 80, yPos + 55);
        
    } catch (error) {
        console.error('Error adding QR code to PDF:', error);
        pdf.setFontSize(10);
        pdf.setTextColor(255, 0, 0);
        pdf.text('QR Code generation failed', 20, yPos);
    }
}

// Create UPI Payment URL
function createUPIUrl(amount) {
    const upiId = appState.upiSettings.storeUpiId;
    const merchantName = appState.upiSettings.storeName;
    const transactionRef = 'TXN' + Date.now();
    
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount.toFixed(2)}&cu=INR&tn=Purchase%20from%20${encodeURIComponent(merchantName)}&tr=${transactionRef}`;
    
    return upiUrl;
}

// Enhanced text receipt with complete store info
function generateTextReceipt(sale) {
    const customer = appState.customers.find(c => c.id === sale.customerId);
    const receiptDate = new Date(sale.timestamp).toLocaleDateString();
    const receiptTime = new Date(sale.timestamp).toLocaleTimeString();
    const settings = appState.upiSettings;
    
    let receiptText = `
🏪 ${settings.storeName.toUpperCase()}
${settings.storeTagline}
========================
📍 ${settings.storeAddress}
📞 ${settings.storePhone}
${settings.storeEmail ? `✉️ ${settings.storeEmail}` : ''}
${settings.gstNumber ? `GST: ${settings.gstNumber}` : ''}
${settings.fssaiLicense ? `FSSAI: ${settings.fssaiLicense}` : ''}
========================

📄 RECEIPT #${sale.id}
📅 Date: ${receiptDate}
⏰ Time: ${receiptTime}

👤 Customer: ${customer ? customer.name : 'Walk-in Customer'}
${customer && customer.phone ? `📞 Phone: ${customer.phone}` : ''}
${customer && customer.email ? `✉️ Email: ${customer.email}` : ''}
========================

🛒 ITEMS PURCHASED:
`;
    
    sale.items.forEach((item, index) => {
        receiptText += `\n${index + 1}. ${item.name}\n`;
        
        if (item.pricingType === 'unit') {
            receiptText += `   📦 ${item.quantity} units × ₹${item.pricePerUnit} = ₹${item.totalPrice.toFixed(2)}\n`;
        } else {
            receiptText += `   ⚖️ ${item.displayWeight} × ₹${item.pricePerKg}/kg = ₹${item.totalPrice.toFixed(2)}\n`;
        }
    });
    
    receiptText += `
========================
💰 BILL SUMMARY:
Subtotal: ₹${sale.subtotal.toFixed(2)}
CGST (2.5%): ₹${(sale.tax/2).toFixed(2)}
SGST (2.5%): ₹${(sale.tax/2).toFixed(2)}
------------------------
💳 TOTAL: ₹${sale.total.toFixed(2)}
Payment: ${sale.paymentMethod.toUpperCase()}
========================
`;

    if (sale.receiptOptions.includeQR && (sale.paymentMethod === 'upi' || document.getElementById('includeQR').checked)) {
        receiptText += `
📱 UPI PAYMENT DETAILS:
UPI ID: ${settings.storeUpiId}
Amount: ₹${sale.total.toFixed(2)}
Merchant: ${settings.storeName}

QR Code will be displayed below...
========================
`;
    }

    receiptText += `
🙏 Thank you for shopping with ${settings.storeName}!
💡 Visit us again for fresh products and great deals!
${settings.businessHours ? `🕒 Store Hours: ${settings.businessHours}` : ''}

🌟 Follow us on social media for daily offers!
${settings.storeOwner ? `\nWith regards,\n${settings.storeOwner}\nStore Manager/Owner` : ''}
========================
    `;
    
    alert(receiptText);
    
    if (sale.receiptOptions.includeQR) {
        showUPIQRCodeModal(sale.total);
    }
}

// Show UPI QR Code in Modal
function showUPIQRCodeModal(amount) {
    const modal = document.createElement('div');
    modal.className = 'pdf-preview-modal';
    modal.innerHTML = `
        <div class="pdf-preview-content">
            <h3>📱 UPI Payment QR Code</h3>
            <div class="qr-code-container">
                <h4>Scan to Pay ₹${amount.toFixed(2)}</h4>
                <canvas id="upiQRCode" class="qr-code-canvas"></canvas>
                <div style="margin-top: 1rem;">
                    <p><strong>UPI ID:</strong> ${appState.upiSettings.storeUpiId}</p>
                    <p><strong>Merchant:</strong> ${appState.upiSettings.storeName}</p>
                    <p><strong>Amount:</strong> ₹${amount.toFixed(2)}</p>
                    <p><strong>Note:</strong> Verify details before payment</p>
                </div>
            </div>
            <div class="pdf-actions">
                <button class="secondary-btn" onclick="closeQRModal()">Close</button>
                <button class="primary-btn" onclick="downloadQRCode()">Download QR Code</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const canvas = document.getElementById('upiQRCode');
    const upiUrl = createUPIUrl(amount);
    
    QRCode.toCanvas(canvas, upiUrl, {
        width: 200,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        }
    }, function (error) {
        if (error) {
            console.error('QR Code generation error:', error);
            canvas.style.display = 'none';
            const container = document.querySelector('.qr-code-container');
            container.innerHTML += '<p style="color: red;">❌ Error generating QR code</p>';
        }
    });
    
    window.currentQRModal = modal;
}

function closeQRModal() {
    if (window.currentQRModal) {
        document.body.removeChild(window.currentQRModal);
        window.currentQRModal = null;
    }
}

function downloadQRCode() {
    const canvas = document.getElementById('upiQRCode');
    if (canvas) {
        const link = document.createElement('a');
        link.download = `UPI_QR_${appState.upiSettings.storeName.replace(/\s+/g, '_')}_${new Date().getTime()}.png`;
        link.href = canvas.toDataURL();
        link.click();
        showNotification('📱 QR Code downloaded successfully!', 'success');
    }
}

function clearBill() {
    appState.currentBill = {
        customerId: null,
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0
    };
    
    document.getElementById('customerSelect').value = '';
    document.getElementById('billingProductSearch').value = '';
    document.getElementById('productSuggestions').innerHTML = '';
    cancelWeightInput();
    updateBillDisplay();
    
    document.querySelector('input[name="paymentMethod"][value="cash"]').checked = true;
    toggleUPISettings();
    
    showNotification('🧹 Bill cleared successfully!', 'info');
}

function addNewCustomerQuick() {
    const name = prompt("Enter customer name:");
    if (!name?.trim()) return;
    
    const phone = prompt("Enter phone number:");
    if (!phone?.trim()) return;
    
    if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
        showNotification('Please enter a valid 10-digit phone number!', 'error');
        return;
    }
    
    const existingCustomer = appState.customers.find(c => c.phone === phone);
    if (existingCustomer) {
        showNotification(`Customer with phone ${phone} already exists!`, 'error');
        return;
    }
    
    const newCustomer = {
        id: Date.now(),
        name: name.trim(),
        phone: phone.trim(),
        email: '',
        address: '',
        totalPurchases: 0
    };
    
    appState.customers.push(newCustomer);
    populateCustomerSelect();
    document.getElementById('customerSelect').value = newCustomer.id;
    selectCustomer();
    
    showNotification(`👤 Customer "${name}" added successfully!`, 'success');
}

// Customer Management Functions
function loadCustomers() {
    displayCustomers();
}

function displayCustomers(customersToShow = appState.customers) {
    const customersGrid = document.getElementById('customersGrid');
    customersGrid.innerHTML = '';
    
    if (customersToShow.length === 0) {
        customersGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">👥</div>
                <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">No customers found</div>
                <small>Add customers to manage their information</small>
            </div>
        `;
        return;
    }
    
    customersToShow.forEach(customer => {
        const customerCard = document.createElement('div');
        customerCard.className = 'customer-card';
        customerCard.innerHTML = `
            <h4>👤 ${customer.name}</h4>
            <div class="customer-info">📞 ${customer.phone}</div>
            ${customer.email ? `<div class="customer-info">✉️ ${customer.email}</div>` : ''}
            ${customer.address ? `<div class="customer-info">📍 ${customer.address}</div>` : ''}
            <div class="customer-info" style="margin-top: 1rem;">
                <strong>💰 Total Purchases: ₹${customer.totalPurchases.toLocaleString()}</strong>
            </div>
            <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
                <button class="secondary-btn" onclick="editCustomer(${customer.id})" style="flex: 1;">✏️ Edit</button>
                <button class="remove-item-btn" onclick="deleteCustomer(${customer.id})" style="flex: 1;">🗑️ Delete</button>
            </div>
        `;
        customersGrid.appendChild(customerCard);
    });
}

function searchCustomers() {
    const searchTerm = document.getElementById('customerSearch').value.toLowerCase();
    const filteredCustomers = appState.customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm) ||
        customer.phone.includes(searchTerm) ||
        customer.email.toLowerCase().includes(searchTerm) ||
        customer.address.toLowerCase().includes(searchTerm)
    );
    displayCustomers(filteredCustomers);
}

function showAddCustomerForm() {
    document.getElementById('addCustomerModal').classList.remove('hidden');
}

function addCustomer(event) {
    event.preventDefault();
    
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    
    if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
        showNotification('Please enter a valid 10-digit phone number!', 'error');
        return;
    }
    
    const existingCustomer = appState.customers.find(c => c.phone === phone);
    if (existingCustomer) {
        showNotification(`Customer with phone ${phone} already exists!`, 'error');
        return;
    }
    
    const newCustomer = {
        id: Date.now(),
        name,
        phone,
        email,
        address,
        totalPurchases: 0
    };
    
    appState.customers.push(newCustomer);
    displayCustomers();
    closeModal('addCustomerModal');
    document.getElementById('addCustomerForm').reset();
    
    showNotification(`✅ Customer "${name}" added successfully!`, 'success');
}

function editCustomer(customerId) {
    const customer = appState.customers.find(c => c.id === customerId);
    if (!customer) return;
    
    const newName = prompt(`Update name for ${customer.name}:`, customer.name);
    if (newName !== null && newName.trim()) {
        customer.name = newName.trim();
    }
    
    const newPhone = prompt(`Update phone for ${customer.name}:`, customer.phone);
    if (newPhone !== null && newPhone.trim()) {
        if (!/^\d{10}$/.test(newPhone.replace(/\D/g, ''))) {
            showNotification('Please enter a valid 10-digit phone number!', 'error');
            return;
        }
        customer.phone = newPhone.trim();
    }
    
    const newEmail = prompt(`Update email for ${customer.name}:`, customer.email);
    if (newEmail !== null) {
        customer.email = newEmail.trim();
    }
    
    displayCustomers();
    showNotification(`✅ Customer "${customer.name}" updated successfully!`, 'success');
}

function deleteCustomer(customerId) {
    const customer = appState.customers.find(c => c.id === customerId);
    if (!customer) return;
    
    const confirmDelete = confirm(`Are you sure you want to delete customer "${customer.name}"?\n\nThis action cannot be undone.`);
    if (confirmDelete) {
        appState.customers = appState.customers.filter(c => c.id !== customerId);
        displayCustomers();
        showNotification(`🗑️ Customer "${customer.name}" deleted successfully!`, 'success');
    }
}

// Category Management Functions
function loadCategories() {
    updateCategoryStats();
    displayCategories();
}

function updateCategoryStats() {
    appState.categories.forEach(category => {
        category.productCount = appState.products.filter(product => 
            product.category === category.name
        ).length;
    });
    
    const totalCategories = appState.categories.length;
    const productsAssigned = appState.products.length;
    const recentCategories = appState.categories.filter(category => {
        const createdDate = new Date(category.createdAt);
        const daysDiff = (new Date() - createdDate) / (1000 * 60 * 60 * 24);
        return daysDiff <= 7;
    }).length;
    
    const topCategory = [...appState.categories]
        .sort((a, b) => b.productCount - a.productCount)[0];
    
    document.getElementById('totalCategories').textContent = totalCategories;
    document.getElementById('productsAssigned').textContent = productsAssigned;
    document.getElementById('recentCategories').textContent = recentCategories;
    document.getElementById('topCategory').textContent = topCategory ? topCategory.name : '-';
}

function displayCategories(categoriesToShow = appState.categories) {
    const categoriesGrid = document.getElementById('categoriesGrid');
    categoriesGrid.innerHTML = '';
    
    if (categoriesToShow.length === 0) {
        categoriesGrid.innerHTML = `
            <div class="empty-categories" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: #666;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">📂</div>
                <h3>No categories found</h3>
                <p>Create your first category to organize your products</p>
                <button class="primary-btn" onclick="showAddCategoryForm()" style="margin-top: 1rem;">
                    📂 Add First Category
                </button>
            </div>
        `;
        return;
    }
    
    categoriesToShow.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        
        categoryCard.style.setProperty('--primary-color', category.color);
        
        const createdDate = new Date(category.createdAt).toLocaleDateString();
        
        categoryCard.innerHTML = `
            <div class="category-header">
                <div class="category-icon" style="background: ${category.color}20;">
                    ${category.icon}
                </div>
                <div class="category-info">
                    <h3>${category.name}</h3>
                    <p>${category.description || 'No description'}</p>
                </div>
            </div>
            
            <div class="category-stats">
                <div class="category-stat">
                    <span class="category-stat-number">${category.productCount}</span>
                    <div class="category-stat-label">Products</div>
                </div>
                <div class="category-stat">
                    <span class="category-stat-number">${getRecentProductsCount(category.name)}</span>
                    <div class="category-stat-label">Recent</div>
                </div>
            </div>
            
            <div style="font-size: 0.8rem; color: #666; margin-bottom: 1rem;">
                Created: ${createdDate}
            </div>
            
            <div class="category-actions">
                <button class="secondary-btn" onclick="editCategory(${category.id})">
                    ✏️ Edit
                </button>
                <button class="secondary-btn" onclick="viewCategoryProducts('${category.name}')">
                    📦 View Products
                </button>
                <button class="remove-item-btn" onclick="deleteCategory(${category.id})">
                    🗑️ Delete
                </button>
            </div>
        `;
        
        categoriesGrid.appendChild(categoryCard);
    });
}

function getRecentProductsCount(categoryName) {
    return appState.products.filter(product => {
        if (product.category !== categoryName) return false;
        return Math.floor(Math.random() * 3);
    }).length;
}

function searchCategories() {
    const searchTerm = document.getElementById('categorySearch').value.toLowerCase();
    const filteredCategories = appState.categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm) ||
        category.description.toLowerCase().includes(searchTerm)
    );
    displayCategories(filteredCategories);
}

function sortCategories() {
    const sortBy = document.getElementById('categorySortBy').value;
    let sortedCategories = [...appState.categories];
    
    switch(sortBy) {
        case 'name':
            sortedCategories.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'products':
            sortedCategories.sort((a, b) => b.productCount - a.productCount);
            break;
        case 'recent':
            sortedCategories.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        case 'color':
            sortedCategories.sort((a, b) => a.color.localeCompare(b.color));
            break;
    }
    
    displayCategories(sortedCategories);
}

function resetCategoryFilters() {
    document.getElementById('categorySearch').value = '';
    document.getElementById('categorySortBy').value = 'name';
    displayCategories();
}

function createQuickCategory(name, icon, color) {
    if (appState.categories.find(cat => cat.name.toLowerCase() === name.toLowerCase())) {
        showNotification(`Category "${name}" already exists!`, 'error');
        return;
    }
    
    const newCategory = {
        id: Date.now(),
        name,
        icon,
        color,
        description: `Auto-created ${name} category`,
        productCount: 0,
        createdAt: new Date().toISOString()
    };
    
    appState.categories.push(newCategory);
    updateAllCategoryDropdowns();
    displayCategories();
    updateCategoryStats();
    
    showNotification(`✅ Quick category "${name}" created! ${icon}`, 'success');
    saveDataToStorage();
}

function showAddCategoryForm() {
    document.getElementById('addCategoryModal').classList.remove('hidden');
    
    document.getElementById('addCategoryForm').reset();
    document.getElementById('selectedIcon').value = '📂';
    document.getElementById('selectedIconDisplay').textContent = '📂';
    document.getElementById('selectedColor').value = '#667eea';
    
    document.querySelectorAll('.icon-option').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.color-option').forEach(btn => btn.classList.remove('selected'));
    
    document.querySelector('.icon-option[data-icon="📂"]')?.classList.add('selected');
    document.querySelector('.color-option[data-color="#667eea"]')?.classList.add('selected');
    
    updatePreview();
}

function updatePreview() {
    const name = document.getElementById('categoryName').value || 'Category Name';
    const description = document.getElementById('categoryDescription').value || 'Category description will appear here';
    const icon = document.getElementById('selectedIcon').value;
    const color = document.getElementById('selectedColor').value;
    
    document.getElementById('previewName').textContent = name;
    document.getElementById('previewDescription').textContent = description;
    document.getElementById('previewIcon').textContent = icon;
    document.getElementById('previewIcon').style.background = color;
}

function suggestIconsForType() {
    const categoryType = document.getElementById('categoryType').value;
    const suggestedIcons = document.getElementById('suggestedIcons');
    
    const iconSuggestions = {
        general: ['📂', '🏠', '📋'],
        food: ['🍎', '🥛', '🍞', '🥤', '🍪', '🥩'],
        health: ['🧴', '💊', '🧼', '🩹'],
        home: ['🧽', '🔧', '🛋️', '💡'],
        electronics: ['📱', '💻', '🎮', '📺'],
        clothing: ['👕', '👗', '👠', '🧢']
    };
    
    const suggestions = iconSuggestions[categoryType] || iconSuggestions.general;
    suggestedIcons.innerHTML = '';
    
    suggestions.forEach(icon => {
        const iconBtn = document.createElement('button');
        iconBtn.type = 'button';
        iconBtn.className = 'icon-option';
        iconBtn.setAttribute('data-icon', icon);
        iconBtn.textContent = icon;
        iconBtn.onclick = () => selectIcon(icon);
        suggestedIcons.appendChild(iconBtn);
    });
}

function selectIcon(icon) {
    document.getElementById('selectedIcon').value = icon;
    document.getElementById('selectedIconDisplay').textContent = icon;
    
    document.querySelectorAll('.icon-option').forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`.icon-option[data-icon="${icon}"]`)?.classList.add('selected');
    
    updatePreview();
}

function selectColor(color) {
    document.getElementById('selectedColor').value = color;
    
    document.querySelectorAll('.color-option').forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`.color-option[data-color="${color}"]`)?.classList.add('selected');
    
    updatePreview();
}

function selectCustomColor() {
    const customColor = document.getElementById('customColor').value;
    selectColor(customColor);
}

function selectEditIcon(icon) {
    document.getElementById('editSelectedIcon').value = icon;
    document.getElementById('editSelectedIconDisplay').textContent = icon;
    
    document.querySelectorAll('#editCategoryModal .icon-option').forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`#editCategoryModal .icon-option[data-icon="${icon}"]`)?.classList.add('selected');
}

function selectEditColor(color) {
    document.getElementById('editSelectedColor').value = color;
    
    document.querySelectorAll('#editCategoryModal .color-option').forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`#editCategoryModal .color-option[data-color="${color}"]`)?.classList.add('selected');
}

function addCategory(event) {
    event.preventDefault();
    
    const name = document.getElementById('categoryName').value.trim();
    const icon = document.getElementById('selectedIcon').value;
    const color = document.getElementById('selectedColor').value;
    const description = document.getElementById('categoryDescription').value.trim();
    
    const existingCategory = appState.categories.find(cat => 
        cat.name.toLowerCase() === name.toLowerCase()
    );
    
    if (existingCategory) {
        showNotification('❌ Category name already exists! Please choose a different name.', 'error');
        return;
    }
    
    const newCategory = {
        id: Date.now(),
        name,
        icon,
        color,
        description,
        productCount: 0,
        createdAt: new Date().toISOString()
    };
    
    appState.categories.push(newCategory);
    updateAllCategoryDropdowns();
    displayCategories();
    updateCategoryStats();
    closeModal('addCategoryModal');
    
    showNotification(`✅ Category "${name}" created successfully! ${icon}`, 'success');
    saveDataToStorage();
}

function editCategory(categoryId) {
    const category = appState.categories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    document.getElementById('editCategoryId').value = category.id;
    document.getElementById('editCategoryName').value = category.name;
    document.getElementById('editCategoryDescription').value = category.description || '';
    document.getElementById('editSelectedIcon').value = category.icon;
    document.getElementById('editSelectedIconDisplay').textContent = category.icon;
    document.getElementById('editSelectedColor').value = category.color;
    
    document.querySelectorAll('#editCategoryModal .icon-option').forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`#editCategoryModal .icon-option[data-icon="${category.icon}"]`)?.classList.add('selected');
    
    document.querySelectorAll('#editCategoryModal .color-option').forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`#editCategoryModal .color-option[data-color="${category.color}"]`)?.classList.add('selected');
    
    document.getElementById('editCategoryModal').classList.remove('hidden');
}

function updateCategory(event) {
    event.preventDefault();
    
    const categoryId = parseInt(document.getElementById('editCategoryId').value);
    const category = appState.categories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    const newName = document.getElementById('editCategoryName').value.trim();
    const newIcon = document.getElementById('editSelectedIcon').value;
    const newColor = document.getElementById('editSelectedColor').value;
    const newDescription = document.getElementById('editCategoryDescription').value.trim();
    
    const existingCategory = appState.categories.find(cat => 
        cat.id !== categoryId && cat.name.toLowerCase() === newName.toLowerCase()
    );
    
    if (existingCategory) {
        showNotification('❌ Category name already exists! Please choose a different name.', 'error');
        return;
    }
    
    const oldName = category.name;
    
    category.name = newName;
    category.icon = newIcon;
    category.color = newColor;
    category.description = newDescription;
    
    appState.products.forEach(product => {
        if (product.category === oldName) {
            product.category = newName;
        }
    });
    
    updateAllCategoryDropdowns();
    displayCategories();
    updateCategoryStats();
    closeModal('editCategoryModal');
    
    showNotification(`✅ Category updated successfully! ${newIcon}`, 'success');
    saveDataToStorage();
}

function deleteCategory(categoryId) {
    const category = appState.categories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    const productsInCategory = appState.products.filter(product => 
        product.category === category.name
    ).length;
    
    let confirmMessage = `Are you sure you want to delete the category "${category.name}"?`;
    
    if (productsInCategory > 0) {
        confirmMessage += `\n\nWarning: This category contains ${productsInCategory} product(s). They will be moved to "Uncategorized".`;
    }
    
    if (!confirm(confirmMessage)) return;
    
    if (productsInCategory > 0) {
        let uncategorizedCategory = appState.categories.find(cat => cat.name === 'Uncategorized');
        if (!uncategorizedCategory) {
            uncategorizedCategory = {
                id: Date.now() + 1,
                name: 'Uncategorized',
                icon: '📦',
                color: '#718096',
                description: 'Products without a specific category',
                productCount: 0,
                createdAt: new Date().toISOString()
            };
            appState.categories.push(uncategorizedCategory);
        }
        
        appState.products.forEach(product => {
            if (product.category === category.name) {
                product.category = 'Uncategorized';
            }
        });
    }
    
    appState.categories = appState.categories.filter(cat => cat.id !== categoryId);
    
    updateAllCategoryDropdowns();
    displayCategories();
    updateCategoryStats();
    
    showNotification(`🗑️ Category "${category.name}" deleted successfully!`, 'success');
    
    if (productsInCategory > 0) {
        showNotification(`📦 ${productsInCategory} product(s) moved to "Uncategorized"`, 'info');
    }
    
    saveDataToStorage();
}

function viewCategoryProducts(categoryName) {
    showSection('inventory');
    
    document.getElementById('categoryFilter').value = categoryName;
    filterByCategory();
    
    showNotification(`📦 Showing products in "${categoryName}" category`, 'info');
}

function exportCategories() {
    try {
        const dataToExport = {
            categories: appState.categories,
            exportDate: new Date().toISOString(),
            totalCategories: appState.categories.length,
            version: '1.0'
        };
        
        const dataStr = JSON.stringify(dataToExport, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `supermart-categories-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        showNotification('📤 Categories exported successfully!', 'success');
    } catch (error) {
        console.error('Error exporting categories:', error);
        showNotification('❌ Error exporting categories!', 'error');
    }
}

function updateAllCategoryDropdowns() {
    const categorySelects = document.querySelectorAll('#productCategory, #categoryFilter');
    
    categorySelects.forEach(select => {
        const currentValue = select.value;
        const isFilter = select.id === 'categoryFilter';
        
        select.innerHTML = isFilter ? '<option value="">All Categories</option>' : '<option value="">Select Category</option>';
        
        appState.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name;
            option.textContent = `${category.icon} ${category.name}`;
            select.appendChild(option);
        });
        
        if (currentValue && appState.categories.find(cat => cat.name === currentValue)) {
            select.value = currentValue;
        }
    });
}

// Reports Functions
function loadReports() {
    generateReport();
}

function generateReport() {
    const period = document.getElementById('reportPeriod').value;
    
    let filteredSales = appState.sales;
    const today = new Date();
    
    switch(period) {
        case 'today':
            const todayStr = today.toISOString().split('T')[0];
            filteredSales = appState.sales.filter(sale => sale.date === todayStr);
            break;
        case 'week':
            const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
            filteredSales = appState.sales.filter(sale => new Date(sale.date) >= weekAgo);
            break;
        case 'month':
            const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
            filteredSales = appState.sales.filter(sale => new Date(sale.date) >= monthAgo);
            break;
        case 'year':
            const yearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
            filteredSales = appState.sales.filter(sale => new Date(sale.date) >= yearAgo);
            break;
    }
    
    const totalSales = filteredSales.reduce((sum, sale) => sum + sale.total, 0);
    const totalOrders = filteredSales.length;
    const avgOrder = totalOrders > 0 ? totalSales / totalOrders : 0;
    
    document.getElementById('reportTotalSales').textContent = `₹${totalSales.toLocaleString()}`;
    document.getElementById('reportTotalOrders').textContent = totalOrders;
    document.getElementById('reportAvgOrder').textContent = `₹${Math.round(avgOrder).toLocaleString()}`;
    
    generateTopProducts();
    generateLowStockReport();
    generateCategoryPerformance();
}

function generateTopProducts() {
    const topProducts = [...appState.products]
        .filter(product => product.sales > 0)
        .sort((a, b) => (b.sales || 0) - (a.sales || 0))
        .slice(0, 5);
    
    const topProductsDiv = document.getElementById('topProducts');
    topProductsDiv.innerHTML = '';
    
    if (topProducts.length === 0) {
        topProductsDiv.innerHTML = `
            <div style="text-align: center; color: #666; padding: 2rem;">
                <div style="font-size: 2rem; margin-bottom: 1rem;">📊</div>
                <div>No sales data available</div>
                <small>Complete some sales to see top products</small>
            </div>
        `;
        return;
    }
    
    topProducts.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.style.cssText = 'margin-bottom: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #48bb78;';
        
        let salesDisplay = '';
        if (product.pricingType === 'unit') {
            salesDisplay = `${product.sales} units sold`;
        } else {
            salesDisplay = `${product.sales.toFixed(1)} kg sold`;
        }
        
        productDiv.innerHTML = `
            <div style="display: flex; justify-content: between; align-items: center;">
                <div>
                    <div style="font-weight: bold; color: #333;">🏆 #${index + 1} ${product.name}</div>
                    <div style="font-size: 0.9rem; color: #666; margin-top: 0.3rem;">${salesDisplay}</div>
                    <div style="font-size: 0.8rem; color: #48bb78; margin-top: 0.2rem;">${product.category}</div>
                </div>
            </div>
        `;
        topProductsDiv.appendChild(productDiv);
    });
}

function generateLowStockReport() {
    const lowStockItems = appState.products.filter(product => {
        if (product.pricingType === 'unit') {
            return product.quantity < 10;
        } else {
            return product.weightInStock < 1.0;
        }
    });
    
    const lowStockDiv = document.getElementById('lowStockItems');
    lowStockDiv.innerHTML = '';
    
    if (lowStockItems.length === 0) {
        lowStockDiv.innerHTML = `
            <div style="text-align: center; color: #48bb78; padding: 2rem;">
                <div style="font-size: 2rem; margin-bottom: 1rem;">✅</div>
                <div style="font-weight: bold;">All products have adequate stock!</div>
                <small>No immediate restocking needed</small>
            </div>
        `;
        return;
    }
    
    lowStockItems.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.style.cssText = 'margin-bottom: 1rem; padding: 1rem; background: #fed7d7; border-radius: 8px; border-left: 4px solid #e53e3e;';
        
        let stockDisplay = '';
        if (product.pricingType === 'unit') {
            stockDisplay = `Only ${product.quantity} units left`;
        } else {
            stockDisplay = `Only ${product.weightInStock} kg left`;
        }
        
        itemDiv.innerHTML = `
            <div>
                <div style="font-weight: bold; color: #742a2a;">⚠️ ${product.name}</div>
                <div style="font-size: 0.9rem; color: #742a2a; margin-top: 0.3rem;">${stockDisplay}</div>
                <div style="font-size: 0.8rem; color: #a0aec0; margin-top: 0.2rem;">${product.category}</div>
            </div>
        `;
        lowStockDiv.appendChild(itemDiv);
    });
}

function generateCategoryPerformance() {
    const categoryStats = {};
    
    appState.products.forEach(product => {
        const category = product.category;
        if (!categoryStats[category]) {
            categoryStats[category] = {
                totalProducts: 0,
                totalSales: 0,
                revenue: 0
            };
        }
        
        categoryStats[category].totalProducts++;
        categoryStats[category].totalSales += product.sales || 0;
        
        if (product.pricingType === 'unit') {
            categoryStats[category].revenue += (product.sales || 0) * product.pricePerUnit;
        } else {
            categoryStats[category].revenue += (product.sales || 0) * product.pricePerKg;
        }
    });
    
    const categoryPerformanceDiv = document.getElementById('categoryPerformance');
    categoryPerformanceDiv.innerHTML = '';
    
    if (Object.keys(categoryStats).length === 0) {
        categoryPerformanceDiv.innerHTML = `
            <div style="text-align: center; color: #666; padding: 2rem;">
                <div style="font-size: 2rem; margin-bottom: 1rem;">📊</div>
                <div>No category data available</div>
            </div>
        `;
        return;
    }
    
    const sortedCategories = Object.entries(categoryStats)
        .sort(([,a], [,b]) => b.revenue - a.revenue);
    
    sortedCategories.forEach(([category, stats]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.style.cssText = 'margin-bottom: 1rem; padding: 1rem; background: #e6fffa; border-radius: 8px; border-left: 4px solid #38b2ac;';
        
                categoryDiv.innerHTML = `
            <div>
                <div style="font-weight: bold; color: #234e52; margin-bottom: 0.5rem;">📂 ${category}</div>
                <div style="font-size: 0.9rem; color: #2d3748;">
                    <div>Products: ${stats.totalProducts}</div>
                    <div>Revenue: ₹${stats.revenue.toFixed(2)}</div>
                    <div style="font-size: 0.8rem; color: #4a5568; margin-top: 0.3rem;">
                        Total Sales: ${stats.totalSales.toFixed(1)} ${stats.totalSales > 0 ? 'units/kg' : ''}
                    </div>
                </div>
            </div>
        `;
        categoryPerformanceDiv.appendChild(categoryDiv);
    });
}

// Modal Functions
function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// Utility Functions
function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        z-index: 3000;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        backdrop-filter: blur(10px);
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
        white-space: pre-line;
    `;
    
    let icon = '';
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
            icon = '✅ ';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #e53e3e, #c53030)';
            icon = '❌ ';
            break;
        case 'warning':
            notification.style.background = 'linear-gradient(135deg, #ed8936, #dd6b20)';
            icon = '⚠️ ';
            break;
        case 'info':
            notification.style.background = 'linear-gradient(135deg, #3182ce, #2b77cb)';
            icon = 'ℹ️ ';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            icon = '🔔 ';
    }
    
    notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
            <span style="font-size: 1.2rem;">${icon}</span>
            <span style="flex: 1; line-height: 1.4;">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    const duration = Math.max(3000, message.length * 50);
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
    
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// Data Management Functions
function loadInitialData() {
    try {
        const savedData = localStorage.getItem('superMartPOSData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            
            if (parsedData.products) {
                appState.products = [...parsedData.products];
            }
            if (parsedData.customers) {
                appState.customers = [...parsedData.customers];
            }
            if (parsedData.sales) {
                appState.sales = [...parsedData.sales];
            }
            if (parsedData.categories) {
                appState.categories = [...parsedData.categories];
            }
            if (parsedData.upiSettings) {
                appState.upiSettings = {...appState.upiSettings, ...parsedData.upiSettings};
                if (document.getElementById('storeUpiId')) {
                    document.getElementById('storeUpiId').value = appState.upiSettings.storeUpiId;
                }
                if (document.getElementById('storeName')) {
                    document.getElementById('storeName').value = appState.upiSettings.storeName;
                }
            }
            if (parsedData.billCounter) {
                appState.billCounter = parsedData.billCounter;
            }
            
            updateAllCategoryDropdowns();
            console.log('📊 Data loaded from localStorage');
            showNotification('💾 Previous data restored successfully!', 'info');
        } else {
            updateAllCategoryDropdowns();
            console.log('🆕 Using default sample data');
        }
    } catch (error) {
        console.error('Error loading data:', error);
        showNotification('⚠️ Error loading saved data, using defaults', 'warning');
        updateAllCategoryDropdowns();
    }
}

function saveDataToStorage() {
    try {
        const dataToSave = {
            products: appState.products,
            customers: appState.customers,
            sales: appState.sales,
            categories: appState.categories,
            billCounter: appState.billCounter,
            upiSettings: appState.upiSettings,
            lastSaved: new Date().toISOString()
        };
        
        localStorage.setItem('superMartPOSData', JSON.stringify(dataToSave));
        console.log('💾 Data saved to localStorage');
    } catch (error) {
        console.error('Error saving data:', error);
        showNotification('⚠️ Error saving data!', 'error');
    }
}

function exportData() {
    try {
        const dataToExport = {
            products: appState.products,
            customers: appState.customers,
            sales: appState.sales,
            categories: appState.categories,
            storeSettings: appState.upiSettings,
            exportDate: new Date().toISOString(),
            version: '2.0'
        };
        
        const dataStr = JSON.stringify(dataToExport, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `${appState.upiSettings.storeName.replace(/\s+/g, '_')}_backup_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        showNotification('📤 Data exported successfully!', 'success');
    } catch (error) {
        console.error('Error exporting data:', error);
        showNotification('❌ Error exporting data!', 'error');
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Modal click-outside-to-close
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            const modalId = event.target.id;
            closeModal(modalId);
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        // Escape key functionality
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
                closeModal(modal.id);
            });
            
            if (!document.getElementById('weightInputSection').classList.contains('hidden')) {
                cancelWeightInput();
            }
            
            document.getElementById('productSuggestions').innerHTML = '';
        }
        
        // Enter key functionality
        if (event.key === 'Enter') {
            const activeElement = document.activeElement;
            
            if (activeElement.id === 'billingProductSearch') {
                const firstSuggestion = document.querySelector('.suggestion-item');
                if (firstSuggestion) {
                    firstSuggestion.click();
                }
            }
            
            if (activeElement.id === 'weightInput') {
                const weightValue = parseFloat(activeElement.value);
                if (weightValue > 0) {
                    addWeightBasedProductToBill();
                }
            }
        }
        
        // Ctrl/Cmd shortcuts
        if (event.ctrlKey || event.metaKey) {
            switch(event.key) {
                case 's':
                    event.preventDefault();
                    saveDataToStorage();
                    showNotification('💾 Data saved manually!', 'success');
                    break;
                case 'n':
                    event.preventDefault();
                    if (appState.currentSection === 'inventory') {
                        showAddProductForm();
                    } else if (appState.currentSection === 'customers') {
                        showAddCustomerForm();
                    } else if (appState.currentSection === 'categories') {
                        showAddCategoryForm();
                    }
                    break;
                case 'e':
                    event.preventDefault();
                    exportData();
                    break;
            }
        }
        
        // Function key navigation
        switch(event.key) {
            case 'F1':
                event.preventDefault();
                showSection('dashboard');
                break;
            case 'F2':
                event.preventDefault();
                showSection('inventory');
                break;
            case 'F3':
                event.preventDefault();
                showSection('billing');
                break;
            case 'F4':
                event.preventDefault();
                showSection('customers');
                break;
            case 'F5':
                event.preventDefault();
                showSection('categories');
                break;
            case 'F6':
                event.preventDefault();
                showSection('reports');
                break;
        }
    });
    
    // Auto-save every 2 minutes
    setInterval(() => {
        saveDataToStorage();
    }, 120000);
    
    // Save on page unload
    window.addEventListener('beforeunload', function() {
        saveDataToStorage();
    });
    
    // Online/Offline status
    window.addEventListener('online', function() {
        showNotification('🌐 Connection restored!', 'success');
    });
    
    window.addEventListener('offline', function() {
        showNotification('📴 Working offline - data will be saved locally', 'warning');
    });
    
    // Initialize help system
    initializeHelpSystem();
}

function initializeHelpSystem() {
    const helpText = `
🎯 SuperMart POS - Complete User Guide

⌨️ Keyboard Shortcuts:
• F1 - Dashboard
• F2 - Inventory  
• F3 - Billing
• F4 - Customers
• F5 - Categories
• F6 - Reports
• Ctrl+S - Save Data
• Ctrl+N - Add New (context-aware)
• Ctrl+E - Export Data
• Escape - Close modals/Clear

🛒 Billing Tips:
• Search products by name, category, or barcode
• Unit items: Click to add, use +/- to adjust quantity
• Weight items: Enter weight in grams or kg for auto-calculation
• Press Enter to select first search result
• UPI QR codes generated automatically for digital payments

📦 Inventory Management:
• Unit-based: For packaged goods (chips, bottles, etc.)
• Weight-based: For fresh produce (fruits, vegetables, grains)
• Auto-generate barcodes or enter custom ones
• Real-time stock tracking and low-stock alerts

📂 Category Management:
• Create custom categories with icons and colors
• Quick templates for common supermarket categories
• Visual category cards with product statistics
• Automatic product migration when categories are deleted

📄 Receipt Features:
• Professional PDF receipts with store branding
• UPI QR codes for contactless payments
• Itemized billing with tax calculations
• Download and print capabilities

🏪 Store Configuration:
• Update store information in UPI settings
• Customize PDF receipt headers and footers
• Add GST number, FSSAI license, and other details
• Professional store branding in all receipts

💡 Pro Tips:
• Data auto-saves every 2 minutes to prevent loss
• Low stock alerts appear on dashboard
• Click notifications to dismiss them quickly
• All data persists in browser storage
• Export data for backup and transfer
• Works offline - perfect for any environment

🚀 Advanced Features:
• Dual pricing system (unit + weight based)
• Customer management with purchase history
• Sales analytics and reporting
• Category performance tracking
• Multi-format barcode support
• Real-time inventory updates
• Professional PDF receipts with QR codes
    `;
    
    window.superMartHelp = helpText;
    
    // Add help button
    const helpButton = document.createElement('button');
    helpButton.innerHTML = '❓ Help';
    helpButton.className = 'help-btn';
    helpButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50px;
        padding: 1rem 1.5rem;
        cursor: pointer;
        font-weight: 600;
        box-shadow: var(--shadow-hover);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    helpButton.addEventListener('click', () => {
        alert(window.superMartHelp);
    });
    
    helpButton.addEventListener('mouseenter', () => {
        helpButton.style.transform = 'scale(1.05)';
    });
    
    helpButton.addEventListener('mouseleave', () => {
        helpButton.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(helpButton);
}

// Export functions for console access (debugging and advanced features)
window.superMartAPI = {
    showHelp: () => alert(window.superMartHelp),
    exportData,
    clearAllData: () => {
        if (confirm('⚠️ This will delete ALL data including products, customers, sales, and categories! Are you sure?\n\nThis action cannot be undone.')) {
            if (confirm('🔴 Final confirmation: Delete everything?')) {
                localStorage.removeItem('superMartPOSData');
                showNotification('🗑️ All data cleared! Reloading application...', 'warning');
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        }
    },
    getStats: () => ({
        storeName: appState.upiSettings.storeName,
        products: appState.products.length,
        customers: appState.customers.length,
        sales: appState.sales.length,
        categories: appState.categories.length,
        totalRevenue: appState.sales.reduce((sum, sale) => sum + sale.total, 0),
        averageOrderValue: appState.sales.length > 0 ? 
            appState.sales.reduce((sum, sale) => sum + sale.total, 0) / appState.sales.length : 0,
        topSellingProduct: appState.products.sort((a, b) => (b.sales || 0) - (a.sales || 0))[0]?.name || 'None',
        lowStockItems: appState.products.filter(p => 
            p.pricingType === 'unit' ? p.quantity < 10 : p.weightInStock < 1
        ).length
    }),
    resetDemo: () => {
        if (confirm('Reset to demo data? This will replace current data.')) {
            localStorage.removeItem('superMartPOSData');
            location.reload();
        }
    },
    importData: (jsonData) => {
        try {
            const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
            if (data.products) appState.products = data.products;
            if (data.customers) appState.customers = data.customers;
            if (data.categories) appState.categories = data.categories;
            if (data.sales) appState.sales = data.sales;
            if (data.storeSettings || data.upiSettings) {
                appState.upiSettings = {...appState.upiSettings, ...(data.storeSettings || data.upiSettings)};
            }
            
            saveDataToStorage();
            updateAllCategoryDropdowns();
            showNotification('📥 Data imported successfully!', 'success');
            return true;
        } catch (error) {
            console.error('Import error:', error);
            showNotification('❌ Error importing data! Check console for details.', 'error');
            return false;
        }
    },
    updateStoreInfo: (storeInfo) => {
        appState.upiSettings = {...appState.upiSettings, ...storeInfo};
        saveDataToStorage();
        showNotification('🏪 Store information updated successfully!', 'success');
    }
};

// Console welcome message and initialization
console.log(`
🏪 SuperMart POS System v2.0 - Complete Edition with Enhanced Store Features
=========================================================================
✅ Successfully loaded with all features:

🎯 Core Features:
• Dual pricing system (unit & weight-based)
• Real-time inventory management
• Customer relationship management
• Advanced category system
• Professional billing with PDF receipts
• UPI QR code generation
• Sales analytics and reporting

🚀 Advanced Features:
• Enhanced store information management
• Professional PDF receipts with complete branding
• Auto-save functionality
• Data export/import
• Offline capability
• Keyboard shortcuts
• Professional notifications
• Responsive design
• Category templates

💡 Developer & Store Management Tools:
• Type superMartAPI.showHelp() for user guide
• Type superMartAPI.getStats() for system statistics
• Type superMartAPI.exportData() to backup data
• Type superMartAPI.updateStoreInfo({...}) to update store details
• Type superMartAPI.clearAllData() to reset (careful!)

🛠️ Technical Info:
• Data Storage: LocalStorage (persistent)
• Auto-save: Every 2 minutes
• Libraries: jsPDF, QRCode.js
• Responsive: Mobile & Desktop ready
• Store Branding: Complete PDF customization

Ready for production use! 🎉✨
`);

// Final initialization
console.log('🚀 SuperMart POS System fully initialized and ready for use!');

// Initialize welcome screen based on usage history
const hasUsedBefore = localStorage.getItem('superMartPOSData');
setTimeout(() => {
    if (hasUsedBefore) {
        showNotification('👋 Welcome back to SuperMart POS!\nAll your data has been restored.', 'info');
    } else {
        showNotification('🎉 Welcome to SuperMart POS!\nYour complete retail management solution is ready.\n\nPress F1-F6 for quick navigation or click ❓ Help for guidance.', 'success');
    }
}, 1000);


